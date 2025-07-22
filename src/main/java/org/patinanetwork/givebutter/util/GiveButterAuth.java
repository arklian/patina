package org.patinanetwork.givebutter.util;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Browser.NewContextOptions;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.options.AriaRole;
import com.microsoft.playwright.options.LoadState;
import org.patinanetwork.givebutter.email.GiveButterEmailClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class GiveButterAuth {
    private static final Logger LOGGER = LoggerFactory.getLogger(GiveButterAuth.class);

    private static final Path STORAGE_STATE_PATH = Paths.get("playwright/.auth/auth.json");

    private final GiveButterEmailClient emailClient;

    @Value("${givebutter.auth.username}")
    private String givebutterUsername;

    @Value("${givebutter.auth.password}")
    private String givebutterPassword;

    public GiveButterAuth(GiveButterEmailClient emailClient) {
        this.emailClient = emailClient;
    }

    public void useSessionState() {
        LOGGER.info("Attempting to restore StorageState");

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright
                    .firefox()
                    .launch(new BrowserType.LaunchOptions().setHeadless(true).setTimeout(10000));
            BrowserContext context = browser.newContext(new NewContextOptions()
                    .setUserAgent("Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0")
                    .setRecordVideoDir(Paths.get("playwright/"))
                    .setViewportSize(1920, 1080)
                    .setStorageStatePath(STORAGE_STATE_PATH));
            LOGGER.info("Loaded browser context");

            Page page = context.newPage();
            page.navigate("https://dashboard.givebutter.com/accounts/237964/contacts");

            page.waitForLoadState(LoadState.NETWORKIDLE);
            try {
                page.waitForURL("https://dashboard.givebutter.com/accounts/237964/contacts");
            } catch (Exception e) {
                LOGGER.error("Failed to navigate to URL.", e);
            }

            context.storageState(new BrowserContext.StorageStateOptions().setPath(STORAGE_STATE_PATH));
            page.waitForTimeout(300);

            context.close();
            browser.close();
        } catch (Exception e) {
            LOGGER.error("Failed to restore StorageState", e);
        }
    }

    public void authenticate() {

        LOGGER.info("Authenticating to Give Butter");

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright
                    .firefox()
                    .launch(new BrowserType.LaunchOptions().setHeadless(true).setTimeout(10000));
            BrowserContext context = browser.newContext(new NewContextOptions()
                    .setUserAgent("Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0")
                    //                    .setRecordVideoDir(Paths.get("playwright/"))
                    //                    .setViewportSize(1920, 1080)
                    .setStorageState(null));
            context.clearCookies();

            LOGGER.info("Loaded browser context");

            Page page = context.newPage();

            page.navigate("https://givebutter.com/login");

            LOGGER.info("Navigated to givebutter.com login");

            page.waitForLoadState(LoadState.NETWORKIDLE);

            page.fill("#email", givebutterUsername);
            page.fill("#password", givebutterPassword);

            LOGGER.info("Filled in credentials, clicking login...");

            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign in"))
                    .click();

            page.waitForTimeout(3000);

            if (page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Send Code"))
                    .isVisible()) {
                LOGGER.info("2FA Required");

                //                page.click("button[name=\"Send Code\"]");
                page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Send Code"))
                        .click();

                page.waitForTimeout(10000);

                String authCode = emailClient.getGiveButterAuthCode();

                LOGGER.info("Found code in email, will fill now...");

                if (authCode.isEmpty()) {
                    LOGGER.error("Code was not found in the email. Manual intervention required.");
                }

                page.fill("#label_code", authCode);

                LOGGER.info("Page filled!");
            }

            try {
                page.waitForURL("https://dashboard.givebutter.com/accounts/237964/home");
            } catch (Exception e) {
                LOGGER.error("Failed to navigate to URL.", e);
            }

            context.storageState(new BrowserContext.StorageStateOptions().setPath(STORAGE_STATE_PATH));
            page.waitForTimeout(300);

            context.close();
            browser.close();
        } catch (Exception e) {
            LOGGER.error("Failed to authenticate.", e);
        }
    }
}
