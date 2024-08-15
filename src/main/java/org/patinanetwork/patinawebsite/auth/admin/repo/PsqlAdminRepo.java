package org.patinanetwork.patinawebsite.auth.admin.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.auth.account.protos.Account;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


/**
 * Implementation of AccountRepo backed by PostgreSQL
 */
@Component(value = "PsqlAdminRepo")
public class PsqlAdminRepo implements AdminRepo {
    DBConnection dbConnection;
    Connection conn;

    public PsqlAdminRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public boolean isAdmin(Account account) {

        String sql = "SELECT COUNT(*) FROM admin WHERE email = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, account.getEmail());
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
