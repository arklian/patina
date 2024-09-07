package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactFormEmail(String name, String email, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom("manuelreyes1241@outlook.com");  // Your email address
        mailMessage.setTo("manuelreyes1241@outlook.com");    // Send the email to yourself
        mailMessage.setReplyTo(email);                      // This is the user's email address
        mailMessage.setSubject("New Contact Form Submission from " + name);
        mailMessage.setText("You received a new message from the contact form:\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message: " + message);

        mailSender.send(mailMessage);
    }
}
