package org.patinanetwork.patchats.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patchats.protos.PatChatMember;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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
                    member = PatChatMember.newBuilder()
                            .setId(db_id)
                            .setName(name)
                            .setActive(active)
                            .build();
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving patchat member by ID", e);
        }

        return member;
    }

    public List<PatChatMember> listPatChatMembers() {
        String sql = "SELECT id, name, active FROM patchat_member";
        List<PatChatMember> members = new ArrayList<>();

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            //            stmt.setInt(1, id);
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    int db_id = rs.getInt("id");
                    String name = rs.getString("name");
                    boolean active = rs.getBoolean("active");
                    PatChatMember member = PatChatMember.newBuilder()
                            .setId(db_id)
                            .setName(name)
                            .setActive(active)
                            .build();

                    members.add(member);
                }
                System.out.println(members);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving all members", e);
        }

        return members;
    }
}
