package org.patinanetwork.patinawebsite.blogs.ops;

import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;
import org.patinanetwork.patinawebsite.search.Elasticsearch;

import java.io.IOException;
import java.util.List;

/**
 * Class to test listAllBlogs() method of BlogsRepo.
 */
public class SearchOp {
    private final BlogsRepo blogsRepo;

    public SearchOp(BlogsRepo blogsRepo) {
        this.blogsRepo = blogsRepo;
    }

    public ListBlogResp elasticRun(String query) throws IOException {
        List<Blog> blogs = Elasticsearch.run(query);
        // Sort blogs based on create_time here
        return ListBlogResp.newBuilder().addAllBlogs(blogs).build();
    }
}
