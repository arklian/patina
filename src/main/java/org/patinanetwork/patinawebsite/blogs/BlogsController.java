package org.patinanetwork.patinawebsite.blogs;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogs.ops.ListOp;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogReq;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogResp;
import org.patinanetwork.patinawebsite.blogs.protos.GetBlogResp;
import org.patinanetwork.patinawebsite.blogs.protos.BlogCountResp;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class BlogsController {

    BlogsRepo blogsRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public BlogsController(
            @Qualifier("PsqlBlogsRepo") BlogsRepo blogsRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.blogsRepo = blogsRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/blog/{blogId}")
    public String getBlog(@PathVariable("blogId") int blogId) {
        Blog blog = blogsRepo.getBlogById(blogId);
        GetBlogResp resp = GetBlogResp.newBuilder().setBlog(blog).build();
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/blogs")
    public String listBlogs() {
        ListOp op = new ListOp(blogsRepo);
        return jsonPrinter.print(op.run());
    }

    @GetMapping(value = "/api/admin/blogs/size")
    public String getBlogCount() {
        int count = blogsRepo.getBlogCount();
        BlogCountResp response = BlogCountResp.newBuilder().setCount(count).build();
        return jsonPrinter.print(response);
    }

    @PostMapping(value = "/api/admin/blog/submit", consumes = MediaType.APPLICATION_JSON_VALUE)
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
}
