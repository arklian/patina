package org.patinanetwork.patinawebsite.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http.csrf(csrf -> csrf.disable()) //TODO: Add back csrf protection
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/api/secured").authenticated();
                    // TODO: no database, as long they login, they can access the page
                    auth.anyRequest().permitAll();
                })
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login_oauth2")
                        .successHandler(customOAuth2AuthenticationSuccessHandler))
                        .defaultSuccessUrl("/api/secured", true)  // Redirect to secured page on success
                        .failureUrl("/login")  // Redirect to login page on failure
                );
        return http.build();
    }
}
