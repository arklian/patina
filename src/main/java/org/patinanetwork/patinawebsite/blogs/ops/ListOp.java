package org.patinanetwork.patinawebsite.blogs.ops;

import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;

import java.util.List;

/**
 * Class to test listAllBlogs() method of BlogsRepo.
 */
public class ListOp {
    private final BlogsRepo blogsRepo;

    public ListOp(BlogsRepo blogsRepo) {
        this.blogsRepo = blogsRepo;
    }

    public ListBlogResp run() {
        List<Blog> blogs = blogsRepo.listAllBlogs();
        // Sort blogs based on create_time here
        return ListBlogResp.newBuilder().addAllBlogs(blogs).build();
    }
}
