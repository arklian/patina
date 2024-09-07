package com.example.demo.controller;

import com.example.demo.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactFormController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public String sendContactForm(@RequestBody ContactFormRequest request) {
        emailService.sendContactFormEmail(request.getName(), request.getEmail(), request.getMessage());
        return "Message sent successfully!";
    }
}

class ContactFormRequest {
    private String name;
    private String email;
    private String message;

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
