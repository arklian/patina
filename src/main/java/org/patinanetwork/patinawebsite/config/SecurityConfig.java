package org.patinanetwork.patinawebsite.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/api/secured").authenticated();
                    // TODO: no database, as long they login, they can access the page
                    auth.anyRequest().permitAll();
                })
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login_oauth2")
                        .defaultSuccessUrl("/api/secured", true)  // Redirect to secured page on success
                        .failureUrl("/login")  // Redirect to login page on failure
                );
        return http.build();
    }
}
