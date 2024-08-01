package org.patinanetwork.patinawebsite.blogs;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlogsController {

    @PostMapping(value = "/api/blog/submit")
    public BlogResponse submitBlog(@RequestBody BlogRequest blogRequest) {
        // Log the received data (optional)
        System.out.println("Received blog submission: " + blogRequest.getName() + ", " + blogRequest.getTitle() + ", " + blogRequest.getContent());

        // Create a response based on the received data
        BlogResponse response = new BlogResponse(blogRequest.getName(), blogRequest.getTitle(), blogRequest.getContent());

        return response;
    }
}
