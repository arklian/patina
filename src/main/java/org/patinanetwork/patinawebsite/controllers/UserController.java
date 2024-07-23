package org.patinanetwork.patinawebsite.controllers;

import org.patinanetwork.patinawebsite.models.User;
import org.patinanetwork.patinawebsite.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/users/view")
    public String getAllUsers(Model model) {
        System.out.println("Getting all users");
        List<User> users = userRepo.findAll();
        model.addAttribute("us", users);
        return "users/showAll";
    }
}
