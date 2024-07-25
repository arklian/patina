package org.patinanetwork.patinawebsite.user;

import jakarta.servlet.http.HttpServletResponse;
import org.patinanetwork.patinawebsite.user.models.User;
import org.patinanetwork.patinawebsite.user.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/api/view")
    public String getAllUsers(Model model) {
        System.out.println("Getting all users");
        List<User> users = userRepo.findAll();
        model.addAttribute("us", users);
        StringBuilder sb = new StringBuilder();
        for (User user : users) {
            sb.append("Username: ").append(user.getName());
            sb.append("<br>User password: ").append(user.getPassword());
            sb.append("<br>User donation: ").append(user.getDonation());
            sb.append("<br><br>");
        }
        sb.append(" <br> <a href=\"/api/createUser\">Add new user!</a>");
        return sb.toString();
    }

    @GetMapping("/api/add")
    public String addRandomUser() {
        User rando = new User("Booopity", "Password", ((int) (10 * Math.random())));
        userRepo.save(rando);
        return "Added User <br> <a href=\"/api/view\">Check out all users!</a>";
    }

    @GetMapping("/api/createUser")
    public String createUser() {
        return "<form action=\"/api/addedUser\" method=\"get\"> <div><label for=\"name\">Enter your name: </label><input type=\"text\" name=\"name\" id=\"name\" required /></div><div><label for=\"password\">Enter your password: </label><input type=\"text\" name=\"password\" id=\"password\" required /></div><div><label for=\"donation\">Enter your donation: </label><input type=\"text\" name=\"donation\" id=\"donation\" required /></div><div><input type=\"submit\" value=\"Submit!\" /></div></form>";
    }

    @GetMapping("/api/addedUser")
    @ResponseBody
    public String addedUser(
            @RequestParam(name = "name") String newName,
            @RequestParam(name = "password") String newPassword,
            @RequestParam(name = "donation") String newDonation,
            HttpServletResponse response) {
        User rando = new User(newName, newPassword, Integer.parseInt(newDonation));
        userRepo.save(rando);
        response.setStatus(201);
        return "Added User <br> <a href=\"/api/createUser\">Add new user!</a> <br> <a href=\"/api/view\">Check out all users!</a>";
    }

    @GetMapping("/api/clear")
    public String clearUsers() {
        userRepo.deleteAll();
        return "Deleted Everyone";
    }
}
