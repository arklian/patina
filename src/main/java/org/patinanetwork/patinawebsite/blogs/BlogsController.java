package org.patinanetwork.patinawebsite.blogs;

import com.google.protobuf.InvalidProtocolBufferException;
import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogReq;
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

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class BlogsController {

    BlogsRepo blogsRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    @Autowired
    public void EventsController(BlogsRepo blogsRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.blogsRepo = blogsRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @PostMapping(value = "/api/blog/submit", consumes = MediaType.APPLICATION_JSON_VALUE, produces =
            MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Blog> CreateBlog(@RequestBody String jsonRequest) throws InvalidProtocolBufferException {

        // Parse the incoming JSON into a Protobuf CreateBlogReq object
        CreateBlogReq blogReq = jsonParser.parse(jsonRequest, CreateBlogReq.newBuilder());

        // Validate required fields
        if (blogReq.getAuthor().isEmpty() || blogReq.getTitle().isEmpty() || blogReq.getContent().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        // Get current timestamp in the required format
        String currentTimestamp = OffsetDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssXXX"));

        // Create a new Blog instance with the current timestamp
        Blog blog = Blog.newBuilder()
                .setAuthor(blogReq.getAuthor())
                .setTitle(blogReq.getTitle())
                .setContent(blogReq.getContent())
                .setCreateTime(currentTimestamp)
                .build();

        // Add the blog to the repository
        blogsRepo.addBlog(blog);

        // Return the created Blog resource in the response body
        return ResponseEntity.ok(blog);
    }
}
