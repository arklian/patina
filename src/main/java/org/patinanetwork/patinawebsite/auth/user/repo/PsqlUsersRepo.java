package org.patinanetwork.patinawebsite.auth.user.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.auth.admin.repo.PsqlAdminRepo;
import org.springframework.stereotype.Component;
import org.patinanetwork.patinawebsite.user.protos.Role;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Implementation of UserRepo backed by PostgreSQL.
 * Handles user creation and role assignment based on admin status.
 */
@Component(value = "PsqlUsersRepo")
public class PsqlUsersRepo implements UsersRepo {

    DBConnection dbConnection;
    Connection conn;

    public PsqlUsersRepo(DBConnection dbConnection, PsqlAdminRepo psqlAdminRepo) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public void createUser(String email, String username, String role) {
        String sql = "INSERT INTO \"user\" (email, username, role) VALUES (?, ?, ?::role)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, email);
            stmt.setString(2, username);
            stmt.setString(3, role);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error while creating user", e);
        }
    }

    @Override
    public boolean userExists(String email) {
        String sql = "SELECT COUNT(*) FROM \"user\" WHERE email = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, email);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt(1) > 0;
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while checking if user exists", e);
        }
        return false;
    }
}
