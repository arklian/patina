package org.patinanetwork.patinawebsite.auth.admin.repo;

import org.patinanetwork.common.db.DBConnection;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Component(value = "PsqlAdminRepo")
public class PsqlAdminRepo implements AdminRepo {
    DBConnection dbConnection;
    Connection conn;

    public PsqlAdminRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public boolean isAdmin(String email) {

        String sql = "SELECT COUNT(*) FROM admin WHERE email = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, email);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt(1) > 0;
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return false;
    }
}
