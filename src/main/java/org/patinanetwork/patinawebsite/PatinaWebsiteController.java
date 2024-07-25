package org.patinanetwork.patinawebsite;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Backend to handle REST api requests for the Patina Network website.
 */
@RestController
public class PatinaWebsiteController {

    @GetMapping("/api/test")
    public String test() {
        return "HelloWorld! \n This is an endpoint!";
    }
}
