package org.patinanetwork.patinawebsite.blogtag.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Component(value = "PsqlBlogtagRepo")
public class PsqlBlogtagRepo implements BlogtagRepo {

    DBConnection dbConnection;
    Connection conn;

    public PsqlBlogtagRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        conn = dbConnection.getConn();
    }

    //TODO: Fix SQL injection
    @Override
    public Blogtag createBlogtag(Blogtag blogtag) {
        Blogtag newBlogtag = null;
        try {
            PreparedStatement stmt = conn.prepareStatement("INSERT INTO blogtag (name) VALUES (?) RETURNING id, name ");
            stmt.setString(1, blogtag.getName());
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    int id = rs.getInt("id");
                    String name = rs.getString("name");
                    newBlogtag = Blogtag.newBuilder()
                            .setId(id)
                            .setName(name)
                            .build();
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while creating blogtag", e);
        }
        return newBlogtag;
    }

    @Override
    public Blogtag getBlogtag(int blogtagId) {
        Blogtag newBlogtag = null;

        try {
            PreparedStatement stmt = conn.prepareStatement("SELECT id, name FROM blogtag WHERE id = ?");
            stmt.setInt(1, blogtagId);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    int id = rs.getInt("id");
                    String name = rs.getString("name");
                    newBlogtag = Blogtag.newBuilder()
                            .setId(id)
                            .setName(name)
                            .build();
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving blogtag by ID", e);
        }
        return newBlogtag;
    }

}
