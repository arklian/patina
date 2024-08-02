package org.patinanetwork.patinawebsite.blogs;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.util.JsonFormat;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class BlogsController {

    BlogsRepo blogsRepo;

    @Autowired
    public BlogsController(BlogsRepo blogsRepo) {
        this.blogsRepo = blogsRepo;
    }

    @PostMapping(value = "/api/blog/submit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> submitBlog(@RequestBody String jsonRequest) throws InvalidProtocolBufferException {
        Blog.Builder blogBuilder = Blog.newBuilder();
        Map<String, String> response = new HashMap<>();

        // Parse the incoming JSON into a Protobuf Blog object
        JsonFormat.parser().merge(jsonRequest, blogBuilder);
        Blog blogRequest = blogBuilder.build();

        // Validate required fields
        if (blogRequest.getAuthor().isEmpty() || blogRequest.getTitle().isEmpty() || blogRequest.getContent().isEmpty()) {
            response.put("status", "Fail");
            response.put("message", "Author, title, and content are required.");
            return ResponseEntity.badRequest().body(response);
        }

        // Get current timestamp in the required format
        String currentTimestamp = OffsetDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ssXXX"));

        // Create a new Blog instance with the current timestamp
        Blog updatedBlog = blogRequest.toBuilder()
                .setCreateTime(currentTimestamp)
                .build();

        // Add the blog to the repository
        blogsRepo.addBlog(updatedBlog);

        // Set response for success
        response.put("status", "Success");
        return ResponseEntity.ok(response);
    }
}
