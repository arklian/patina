package org.patinanetwork.patinawebsite.auth.account.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.auth.admin.repo.PsqlAdminRepo;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Implementation of UserRepo backed by PostgreSQL.
 * Handles user creation and role assignment based on admin status.
 */
@Component(value = "PsqlUsersRepo")
public class PsqlAccountRepo implements AccountRepo {

    DBConnection dbConnection;
    Connection conn;

    public PsqlAccountRepo(DBConnection dbConnection, PsqlAdminRepo psqlAdminRepo) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public void createAccount(String email, String username) {
        String sql = "INSERT INTO account (email, username) VALUES (?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, email);
            stmt.setString(2, username);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error while creating user", e);
        }
    }

    @Override
    public boolean accountExists(String email) {
        String sql = "SELECT COUNT(*) FROM account WHERE email = ?";
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

    @Override
    public int getAccountCount() {
        String sql = "SELECT COUNT(*) FROM account";
        try (PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            if (rs.next()) {
                return rs.getInt(1); // Get the count from the first column
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving blog count", e);
        }
        return 0;
    }
}
