package org.patinanetwork.patchats.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.blogs.protos.PatChatMember;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Component(value = "PsqlPatChatRepo")
public class PsqlPatChatRepo implements PatChatRepo {


    DBConnection dbConnection;
    Connection conn;

    public PsqlPatChatRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public PatChatMember getPatChatMember(int id) {

            String sql = "SELECT id, name, active FROM patchat_member WHERE id = ?";
            PatChatMember member = null;

            try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                stmt.setInt(1, id);
                try (ResultSet rs = stmt.executeQuery()) {
                    if (rs.next()) {
                        int db_id = rs.getInt("id");
                        String name = rs.getString("name");
                        boolean active = rs.getBoolean("active");
                        member = PatChatMember.newBuilder().setId(db_id).setName(name).setActive(active).build();
                    }
                }
            } catch (SQLException e) {
                throw new RuntimeException("Error while retrieving patchat member by ID", e);
            }

        return member;
        }

}
