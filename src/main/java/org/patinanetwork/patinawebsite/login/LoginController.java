package org.patinanetwork.patinawebsite.login;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Map;

/**
 * Controller for handling login
 */
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class LoginController {

    @Value("${PATINA_ADMIN_PASSWORD}")
    private String ADMIN_PASSWORD;

    @Value("${PATINA_ADMIN_COOKIE}")
    private String ADMIN_COOKIE;

    @PostMapping(value = "/api/login", consumes = "application/json")
    public void login(@RequestBody Map<String, Object> input, HttpServletResponse response) throws IOException {
        if (input.get("password").equals(ADMIN_PASSWORD)) {
            Cookie cookie = new Cookie("auth", ADMIN_COOKIE);
            response.addCookie(cookie);
            response.setStatus(HttpServletResponse.SC_FOUND); // 302 Found status
            response.setHeader("Location", "/admin"); // Redirect to /admin
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED); // 401 Unauthorized status
            response.setHeader("Content-Type", "text/plain"); // Set content type for error message
            response.getWriter().write("Invalid login"); // Write error message to response
        }
    }
}
