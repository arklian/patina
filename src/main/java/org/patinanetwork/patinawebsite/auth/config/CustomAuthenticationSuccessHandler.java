package org.patinanetwork.patinawebsite.auth.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.patinanetwork.patinawebsite.auth.admin.repo.AdminRepo;
import org.patinanetwork.patinawebsite.auth.account.repo.AccountRepo;
import org.patinanetwork.patinawebsite.auth.account.protos.Account;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Handles successful OAuth2 login by creating user accounts,
 * assigning roles, and redirecting users based on their role.
 */
@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final AccountRepo AccountRepo;
    private final AdminRepo AdminRepo;

    public CustomAuthenticationSuccessHandler(AccountRepo AccountRepo, AdminRepo AdminRepo) {
        this.AccountRepo = AccountRepo;
        this.AdminRepo = AdminRepo;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        Object principal = authentication.getPrincipal();
        String email = null;
        String username = null;

        if (principal instanceof OAuth2User) {
            OAuth2User oAuth2User = (OAuth2User) principal;
            Map<String, Object> attributes = oAuth2User.getAttributes();

            email = (String) attributes.get("email");
            username = (String) attributes.get("name");

            if (email == null) {
                // Error out if no email is provided, as our backend tracks email as the ID
                // and uses it to verify admin permissions.
                response.sendRedirect("/oauth2?error=no-email");
                return;
            }
        } else {
            throw new UsernameNotFoundException("User not found");
        }

        try {
            Account account = Account.newBuilder()
                    .setEmail(email)
                    .setUsername(username)
                    .build();

            // Check if user already exists in the database
            boolean userExists = AccountRepo.accountExists(account);
            boolean isAdmin = AdminRepo.isAdmin(account);

            if(!userExists) {
                AccountRepo.createAccount(account);
            }

            // Fetch user authorities
            List<GrantedAuthority> authorities = new ArrayList<>(authentication.getAuthorities());

            // Check if the user is an admin
            if (isAdmin) {
                authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            }

            // Update authentication with new authorities
            Authentication newAuth = new UsernamePasswordAuthenticationToken(
                    authentication.getPrincipal(),
                    authentication.getCredentials(),
                    authorities
            );
            SecurityContextHolder.getContext().setAuthentication(newAuth);
            // Redirect to different URLs based on user role
            String redirectUrl = isAdmin ? "/admin" : "/";
            response.sendRedirect(redirectUrl);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
