package org.patinanetwork.patinawebsite.auth.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${PATINA_ADMIN_PASSWORD}")
    private String ADMIN_PASSWORD;

    private final AuthenticationSuccessHandler customAuthenticationSuccessHandler;

    public SecurityConfig(AuthenticationSuccessHandler customAuthenticationSuccessHandler) {
        this.customAuthenticationSuccessHandler = customAuthenticationSuccessHandler;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/admin", "/admin/**", "/api/admin/**").hasRole("ADMIN")
                        .anyRequest().permitAll()
                )
                .formLogin(form -> form
                        .loginPage("/login")
                        .permitAll()
                        .defaultSuccessUrl("/admin", true)
                        .failureUrl("/login?error")
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login")
                        .successHandler(customAuthenticationSuccessHandler)
                        .failureUrl("/login")
                );
        return http.build();
    }

    /**
     * Configures an in-memory user for authentication. This method creates a single
     * admin user with a hardcoded username and password, and assigns the "ADMIN" role.
     * The password is stored in plain text (no encoding) for simplicity, suitable
     * for development or testing environments.
     */
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User // Create a single admin user with a hardcoded password.
                .withUsername("admin")
                .password("{noop}"+ ADMIN_PASSWORD)
                .roles("ADMIN")
                .build();
        return new InMemoryUserDetailsManager(user);
    }
}
