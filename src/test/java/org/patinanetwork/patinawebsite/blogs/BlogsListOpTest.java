package org.patinanetwork.patinawebsite.blogs;

import org.junit.jupiter.api.Test;
import org.patinanetwork.patinawebsite.blogs.ops.ListOp;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.TestBlogsRepo;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BlogsListOpTest {

    @Test
    public void testEmpty() {
        // Arrange
        TestBlogsRepo repo = new TestBlogsRepo();
        ListOp op = new ListOp(repo);

        // Act
        ListBlogResp resp = op.run();

        // Assert
        ListBlogResp expected = ListBlogResp.newBuilder().build();
        assertEquals(expected, resp);
    }

    @Test
    public void testOne() {
        // Arrange
        TestBlogsRepo repo = new TestBlogsRepo();
        Blog blog1 = Blog.newBuilder()
                .setId(1)
                .setAuthor("author")
                .setTitle("title")
                .setCreateTime("")
                .setContent("")
                .setImage("")
                .build();
        repo.addBlog(blog1);
        ListOp op = new ListOp(repo);

        // Act
        ListBlogResp resp = op.run();

        // Assert
        ListBlogResp expected = ListBlogResp.newBuilder().addBlogs(blog1).build();
        assertEquals(expected, resp);
    }

    @Test
    public void testMultiple() {
        // Arrange
        TestBlogsRepo repo = new TestBlogsRepo();
        Blog blog1 = Blog.newBuilder()
                .setId(1)
                .setAuthor("author")
                .setTitle("title")
                .setCreateTime("")
                .setContent("")
                .setImage("")
                .build();
        repo.addBlog(blog1);
        ListOp op = new ListOp(repo);

        // Act
        ListBlogResp resp = op.run();

        // Assert
        ListBlogResp expected = ListBlogResp.newBuilder().build();
        assertEquals(expected, resp);
    }
}
