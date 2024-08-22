package org.patinanetwork.patinawebsite.blogs.repo;

import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

/**
 * Implementation of BlogsRepo for testing without DB connection.
 * Stores Blogs using a Hashmap.
 */
@Component(value = "FakeBlogsRepo")
public class FakeBlogsRepo implements BlogsRepo {
    HashMap<Integer, Blog> blogs = new HashMap<>();

    public FakeBlogsRepo() {}

    @Override
    public void addBlog(Blog blog) {
        blogs.put(blog.getId(), blog);
    }

    @Override
    public Blog getBlogById(int id) {
        return blogs.get(id);
    }

    @Override
    public List<Blog> listBlogs(int limit, int page) {
        return blogs.values().stream().limit(limit).toList();
    }

    @Override
    public int getBlogCount() {
        return blogs.size();
    }

    public void addTestBlogs(int count) {
        for (int i = 0; i < count; i++) {
            addBlog(Blog.newBuilder().setId(i).setTitle(String.valueOf(i)).build());
        }
    }
}
