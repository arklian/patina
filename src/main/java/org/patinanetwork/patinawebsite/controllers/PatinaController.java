package org.patinanetwork.patinawebsite.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatinaController {

    @GetMapping("/api/test")
    public String test() {
        return "HelloWorld! \n This is an endpoint!";
    }
}
