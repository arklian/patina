package org.patinanetwork.patinawebsite.blogs.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

/**
 * Implementation of BlogsRepo backed by PostgreSQL
 * Todo: Figure out the best way to handle SQL exceptions and manage connections.
 */
@Component(value = "PsqlBlogsRepo")
public class PsqlBlogsRepo implements BlogsRepo {

    DBConnection dbConnection;
    Connection conn;

    public PsqlBlogsRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public void addBlog(Blog blog) {
        String sql = "INSERT INTO blog (author, title, content, create_time, image) VALUES (?, ?, ?, ?, ?)";

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            // Todo: Sanitize the strings to prevent SQL injection
            stmt.setString(1, blog.getAuthor());
            stmt.setString(2, blog.getTitle());
            stmt.setString(3, blog.getContent());

            // Convert create_time from String to Timestamp in UTC
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssXXX");
            OffsetDateTime dateTime = OffsetDateTime.parse(blog.getCreateTime(), formatter);
            // Convert to UTC
            OffsetDateTime utcDateTime = dateTime.withOffsetSameInstant(ZoneOffset.UTC);
            stmt.setTimestamp(4, Timestamp.from(utcDateTime.toInstant()));

            stmt.setString(5, blog.getImage());

            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error while adding blog", e);
        }
    }

    @Override
    public Blog getBlogById(int id) {
        String sql = "SELECT id, author, title, content, create_time FROM blogpost WHERE id = ?";
        Blog blog = null;

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    blog = getBlog(rs);
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving blog by ID", e);
        }

        return blog;
    }

    @Override
    public List<Blog> listAllBlogs() {
        List<Blog> blogs = new ArrayList<>();
        String sql =
                "SELECT id, author, title, content, create_time, image FROM blog WHERE author <> 'ChatGPT' ORDER BY create_time DESC";

        try (PreparedStatement stmt = conn.prepareStatement(sql);
                ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                Blog blog = getBlog(rs);
                blogs.add(blog);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while listing all blogs", e);
        }

        return blogs;
    }

    // Create Blog proto from SQL ResultSet
    private static Blog getBlog(ResultSet rs) throws SQLException {
        int id = rs.getInt("id");
        String author = rs.getString("author");
        String title = rs.getString("title");
        String content = rs.getString("content");
        java.sql.Timestamp sqlTimestamp = rs.getTimestamp("create_time");
        String image = rs.getString("image");

        return Blog.newBuilder()
                .setId(id)
                .setAuthor(author)
                .setTitle(title)
                .setCreateTime(String.valueOf(sqlTimestamp))
                .setContent(content)
                .setImage(image)
                .build();
    }
}
