package org.patinanetwork.patinawebsite.blogs;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogReq;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogResp;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class BlogsController {

    BlogsRepo blogsRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public BlogsController(BlogsRepo blogsRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.blogsRepo = blogsRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @PostMapping(value = "/api/blog/submit", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String CreateBlog(@RequestBody String jsonRequest) {
        // Parse the incoming JSON into a Protobuf CreateBlogReq object
        CreateBlogReq blogReq = jsonParser.parse(jsonRequest, CreateBlogReq.newBuilder());

        // Get current timestamp in the required format
        String currentTimestamp = OffsetDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssXXX"));

        // Create a new Blog instance with the current timestamp
        Blog blog = Blog.newBuilder()
                .setAuthor(blogReq.getAuthor())
                .setTitle(blogReq.getTitle())
                .setContent(blogReq.getContent())
                .setCreateTime(currentTimestamp)
                .setImage(blogReq.getImage())
                .build();

        // Add the blog to the repository
        blogsRepo.addBlog(blog);
        // Return the JSON representation of the Blog object
        CreateBlogResp resp = CreateBlogResp.newBuilder().setBlog(blog).build();
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/blogs")
    public String listBlogs() {
        List<Blog> blogs = blogsRepo.listAllBlogs();
        ListBlogResp resp = ListBlogResp.newBuilder().addAllBlogs(blogs).build();
        return jsonPrinter.print(resp);
    }
}
