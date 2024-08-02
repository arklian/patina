package org.patinanetwork.patinawebsite.blogs.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.OffsetDateTime;
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
        String sql = "INSERT INTO blog (author, title, content, create_time) VALUES (?, ?, ?, ?)";

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, blog.getAuthor());
            stmt.setString(2, blog.getTitle());
            stmt.setString(3, blog.getContent());

            // Parse the create_time from the Blog object and set it to the PreparedStatement
            OffsetDateTime offsetDateTime = OffsetDateTime.parse(blog.getCreateTime(), DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ssXXX"));
            stmt.setTimestamp(4, java.sql.Timestamp.from(offsetDateTime.toInstant()));

            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error while adding blog", e);
        }
    }



    @Override
    public Blog getBlogById(String id) {
        String sql = "SELECT id, author, title, content, create_time FROM blogpost WHERE id = ?";
        Blog blog = null;

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, Integer.parseInt(id));
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
        String sql = "SELECT id, author, title, content, create_time FROM blogpost";

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

        java.util.Date utilDate = new java.util.Date(sqlTimestamp.getTime());
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String stringDate = dateFormat.format(utilDate);

        return Blog.newBuilder()
                .setId(id)
                .setAuthor(author)
                .setTitle(title)
                .setCreateTime(stringDate)
                .setContent(content)
                .build();
    }
}
