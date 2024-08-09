package org.patinanetwork.patinawebsite.blogs;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogs.ops.CreateOp;
import org.patinanetwork.patinawebsite.blogs.ops.ListOp;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogReq;
import org.patinanetwork.patinawebsite.blogs.protos.GetBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;
import org.patinanetwork.patinawebsite.generator.ChatGPT;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @PostMapping(value = "/api/blog/submit", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String CreateBlog(@RequestBody String jsonRequest) {
        // Parse the incoming JSON into a Protobuf CreateBlogReq object
        CreateBlogReq blogReq = jsonParser.parse(jsonRequest, CreateBlogReq.newBuilder());

        CreateOp op = new CreateOp(blogReq, blogsRepo);
        return jsonPrinter.print(op.run());
    }

    @GetMapping(value = "/api/blog/hidden")
    public String ChatGPTBlog() {
        List<String> outputs = ChatGPT.listOutputs(50);
        // List<String> outputs = ChatGPT.fakeOutputs();
        for (String output : outputs) {
            CreateOp op = new CreateOp(output, blogsRepo);
            op.run();
        }
        return "no";
    }
}
