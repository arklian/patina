package org.patinanetwork.patinawebsite.login;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for handling login
 */
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class LoginController {

    @PostMapping(value = "/api/login", consumes = "application/json")
    public String login(@RequestBody String input, HttpServletResponse response) {
        if (input.equals("\"asoifj4y04h02h0hwas0fha0shxzASFHsaflhsaflk\"")) {
            Cookie cookie = new Cookie("auth", "o3hto2dsgidshgid30285y038hs0fisasflszf");
            response.addCookie(cookie);
            return "Login success";
        }
        return "Invalid login";
    }
}
