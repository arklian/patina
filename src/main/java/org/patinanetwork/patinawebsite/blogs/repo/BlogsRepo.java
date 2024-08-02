package org.patinanetwork.patinawebsite.blogs.repo;

import org.patinanetwork.patinawebsite.blogs.protos.Blog;

import java.util.List;

public interface BlogsRepo {
    // Add a new blog
    void addBlog(Blog blog);

    // Get a blog by its ID
    Blog getBlogById(String id);

    // List all blogs
    List<Blog> listAllBlogs();
}
