package org.patinanetwork.patinawebsite.auth.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.patinanetwork.patinawebsite.auth.admin.repo.PsqlAdminRepo;
import org.patinanetwork.patinawebsite.auth.user.repo.PsqlUsersRepo;
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

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final PsqlUsersRepo psqlUsersRepo;
    private final PsqlAdminRepo psqlAdminRepo;

    public CustomAuthenticationSuccessHandler(PsqlUsersRepo psqlUsersRepo, PsqlAdminRepo psqlAdminRepo) {
        this.psqlUsersRepo = psqlUsersRepo;
        this.psqlAdminRepo = psqlAdminRepo;
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
                response.sendRedirect("/oauth2?error=no-email");
                return;
            }
        } else {
            throw new UsernameNotFoundException("User not found");
        }

        try {
            // Check if user already exists in the database
            boolean userExists = psqlUsersRepo.userExists(email);
            boolean isAdmin = psqlAdminRepo.isAdmin(email);

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
            String redirectUrl = isAdmin ? "/api/secured" : "/";
            response.sendRedirect(redirectUrl);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
