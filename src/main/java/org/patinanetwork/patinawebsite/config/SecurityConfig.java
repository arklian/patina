package org.patinanetwork.patinawebsite.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers("/api/blog/submit","/api/event/delete/**","/api/events/add"))
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/api/secured").authenticated();
                    // TODO: no database, as long they login, they can access the page
                    auth.anyRequest().permitAll();
                })
                .oauth2Login(withDefaults())
                .formLogin(withDefaults())
                .build();
    }

}
