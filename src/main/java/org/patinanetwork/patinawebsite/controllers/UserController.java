package org.patinanetwork.patinawebsite.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.patinanetwork.patinawebsite.models.User;
import org.patinanetwork.patinawebsite.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

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

    @PostMapping("/users/add")
    public String addUser(@RequestParam Map<String, String> newuser, HttpServletResponse response) {
        System.out.println("ADD user");
        String newName = newuser.get("name");
        String newPassword = newuser.get("password");
        int newDonation = Integer.parseInt(newuser.get("donation"));
        userRepo.save(new User(newName, newPassword, newDonation));
        response.setStatus(201);
        return "users/addedUser";
    }

}
