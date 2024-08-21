package org.patinanetwork.patinawebsite.blogs.ops;

import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogReq;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;

import java.util.List;

/**
 * Operations to handle the listBlogs endpoint
 */
public class ListOp {
    private final BlogsRepo blogsRepo;

    public ListOp(BlogsRepo blogsRepo) {
        this.blogsRepo = blogsRepo;
    }

    public ListBlogResp run(ListBlogReq request) {
        int limit = request.getLimit() != 0 ? request.getLimit() : 10;
        int total = blogsRepo.getBlogCount();
        List<Blog> blogs = blogsRepo.listBlogs(limit);
        // Sort blogs based on create_time here
        return ListBlogResp.newBuilder().addAllBlogs(blogs).setTotal(total).build();
    }
}
