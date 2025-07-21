package org.patinanetwork.givebutter.email;

import jakarta.mail.Authenticator;
import jakarta.mail.Folder;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Store;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Provides read-only access to the GiveButter email account in order to access the 2fa code.
 */
@Component
@EnableConfigurationProperties(GiveButterEmailProperties.class)
public class GiveButterEmailClient {
    private final GiveButterEmailProperties emailProperties;
    private static Session session = null;

    public GiveButterEmailClient(final GiveButterEmailProperties emailProperties) {
        this.emailProperties = emailProperties;
        final Properties properties = new Properties();
        properties.setProperty("mail.imap.host", emailProperties.getHost());
        properties.setProperty("mail.imap.port", emailProperties.getPort());
        properties.setProperty("mail.imap.ssl.enable", "true"); // Enable SSL for security
        properties.setProperty("mail.imap.auth", "true"); // Enable authentication

        session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailProperties.getUsername(), emailProperties.getPassword());
            }
        });
    }

    public String getGiveButterAuthCode() {
        try {

            final Store store = session.getStore("imap");

            store.connect(emailProperties.getHost(), emailProperties.getUsername(), emailProperties.getPassword());

            final Folder emailFolder = store.getFolder("Inbox");
            emailFolder.open(Folder.READ_ONLY);

            String authCode = "";

            int count = emailFolder.getMessageCount();
            for (var m : emailFolder.getMessages(count - 5, count)) {
                try {
                    String subject = m.getSubject();

                    if (!subject.contains("Givebutter Two-Factor Authentication Code")) {
                        continue;
                    }
                    if (!m.isMimeType("text/html")) {
                        System.err.println(
                                "Givebutter Two-Factor Authentication was not in the expected text/html mime-type");
                        continue;
                    }

                    // Read email body into content.
                    InputStream is = m.getInputStream();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(is));
                    StringBuilder sb = new StringBuilder();
                    String thisLine;
                    while ((thisLine = reader.readLine()) != null) {
                        sb.append(thisLine).append("\n");
                    }
                    String content = sb.toString();

                    // Convert html email body into plain text.
                    Document doc = Jsoup.parse(content);
                    String bodyText = doc.body().text();

                    Pattern pattern = Pattern.compile("verification code is: \\s*(\\d{6})");
                    Matcher matcher = pattern.matcher(bodyText);

                    if (matcher.find()) {
                        authCode = matcher.group(1);
                    }

                } catch (Exception e) {
                    System.err.println(e);
                }
            }
            emailFolder.close();
            store.close();

            return authCode;
        } catch (Exception e) {
            throw new RuntimeException("Something went wrong when receiving past messages", e);
        }
    }

    public void testConnection() throws EmailException {
        try {
            final Store store = session.getStore("imap");

            store.connect(emailProperties.getHost(), emailProperties.getUsername(), emailProperties.getPassword());

            final Folder emailFolder = store.getFolder("Inbox");
            emailFolder.open(Folder.READ_ONLY);

            emailFolder.close();
            store.close();
        } catch (Exception e) {
            throw new EmailException("Something went wrong when testing connection", e);
        }
    }
}
