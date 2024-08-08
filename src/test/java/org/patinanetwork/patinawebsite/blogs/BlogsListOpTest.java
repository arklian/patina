package org.patinanetwork.patinawebsite.blogs;

import org.junit.jupiter.api.Test;
import org.patinanetwork.patinawebsite.blogs.ops.ListOp;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.FakeBlogsRepo;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Class for testing ListOp.
 */
public class BlogsListOpTest {

    @Test
    public void EmptyBlogsReturnEmptyResponse() {
        // Arrange
        FakeBlogsRepo repo = new FakeBlogsRepo();
        ListOp op = new ListOp(repo);

        // Act
        ListBlogResp resp = op.run();

        // Assert
        ListBlogResp expected = ListBlogResp.newBuilder().build();
        assertEquals(expected, resp);
    }

    @Test
    public void OneBlogReturnOneResponse() {
        // Arrange
        FakeBlogsRepo repo = new FakeBlogsRepo();
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
    public void MultipleBlogsReturnMultipleResponse() {
        // Arrange
        FakeBlogsRepo repo = new FakeBlogsRepo();
        Blog blog1 = Blog.newBuilder()
                .setId(1)
                .setAuthor("author")
                .setTitle("title")
                .setCreateTime("")
                .setContent("")
                .setImage("")
                .build();
        repo.addBlog(blog1);
        Blog blog2 = Blog.newBuilder()
                .setId(2)
                .setAuthor("author2")
                .setTitle("title2")
                .setCreateTime("")
                .setContent("")
                .setImage("")
                .build();
        repo.addBlog(blog2);
        ListOp op = new ListOp(repo);

        // Act
        ListBlogResp resp = op.run();

        // Assert
        ListBlogResp expected =
                ListBlogResp.newBuilder().addBlogs(blog1).addBlogs(blog2).build();
        assertEquals(expected, resp);
    }
}
