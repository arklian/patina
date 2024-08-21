package org.patinanetwork.patinawebsite.blogs;

import org.junit.jupiter.api.Test;
import org.patinanetwork.patinawebsite.blogs.ops.ListOp;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogReq;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;
import org.patinanetwork.patinawebsite.blogs.repo.FakeBlogsRepo;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Class for testing ListOp.
 */
public class BlogsListOpTest {

    @Test
    public void emptyBlogsReturnEmptyResponse() {
        // Arrange
        FakeBlogsRepo repo = new FakeBlogsRepo();
        ListOp op = new ListOp(repo);
        ListBlogReq request = ListBlogReq.newBuilder().build();

        // Act
        ListBlogResp resp = op.run(request);

        // Assert
        ListBlogResp expected = ListBlogResp.newBuilder().build();
        assertEquals(expected, resp);
    }

    @Test
    public void oneBlogReturnOneResponse() {
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
        ListBlogReq request = ListBlogReq.newBuilder().build();

        // Act
        ListBlogResp resp = op.run(request);

        // Assert
        ListBlogResp expected = ListBlogResp.newBuilder().addBlogs(blog1).build();
        assertEquals(expected, resp);
    }

    @Test
    public void multipleBlogsReturnMultipleResponse() {
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
        ListBlogReq request = ListBlogReq.newBuilder().build();

        // Act
        ListBlogResp resp = op.run(request);

        // Assert
        ListBlogResp expected =
                ListBlogResp.newBuilder().addBlogs(blog1).addBlogs(blog2).build();
        assertEquals(expected, resp);
    }

    @Test
    public void limitReturnsCorrectNumberOfBlogs() {
        // Arrange
        FakeBlogsRepo repo = new FakeBlogsRepo();
        repo.addTestBlogs(3);
        ListOp op = new ListOp(repo);
        ListBlogReq request = ListBlogReq.newBuilder().setLimit(2).build();

        // Act
        ListBlogResp resp = op.run(request);

        // Assert
        assertEquals(2, resp.getBlogsCount());
    }

    @Test
    public void missingLimitReturnsTenBlogs() {
        // Arrange
        FakeBlogsRepo repo = new FakeBlogsRepo();
        repo.addTestBlogs(20);
        ListOp op = new ListOp(repo);
        ListBlogReq request = ListBlogReq.newBuilder().build();

        // Act
        ListBlogResp resp = op.run(request);

        // Assert
        assertEquals(10, resp.getBlogsCount());
    }
}
