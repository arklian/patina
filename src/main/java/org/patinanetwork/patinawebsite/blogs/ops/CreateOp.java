package org.patinanetwork.patinawebsite.blogs.ops;

import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogReq;
import org.patinanetwork.patinawebsite.blogs.protos.CreateBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Class to do CreateBlog method of BlogsRepo.
 */
public class CreateOp {
    private final String author;
    private final String title;
    private final String content;
    private final String image;
    private final BlogsRepo repo;

    public CreateOp(CreateBlogReq blogReq, BlogsRepo repo) {
        this.author = blogReq.getAuthor();
        this.title = blogReq.getTitle();
        this.content = blogReq.getContent();
        this.image = blogReq.getImage();
        this.repo = repo;
    }

    public CreateOp(String text, BlogsRepo repo) {
        this.author = "ChatGPT";
        this.title = "Generated Content";
        this.content = text;
        this.image = "";
        this.repo = repo;
    }

    public CreateBlogResp run() {
        // Get current timestamp in the required format
        String currentTimestamp = OffsetDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssXXX"));

        // Create a new Blog instance with the current timestamp
        Blog blog = Blog.newBuilder()
                .setAuthor(author)
                .setTitle(title)
                .setContent(content)
                .setCreateTime(currentTimestamp)
                .setImage(image)
                .build();

        // Add the blog to the repository
        repo.addBlog(blog);
        return CreateBlogResp.newBuilder().setBlog(blog).build();
    }
}
