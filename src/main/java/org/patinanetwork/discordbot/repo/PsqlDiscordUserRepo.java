package org.patinanetwork.discordbot.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.discordbot.protos.DiscordUser;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component(value = "PsqlDiscordUserRepo")
public class PsqlDiscordUserRepo implements DiscordUserRepo {
    DBConnection dbConnection;
    Connection conn;

    public PsqlDiscordUserRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    public DiscordUser getDiscordUser(String discord_id) {
        String sql = "SELECT patchat_member_id, discord_id, username, nickname FROM discord_user WHERE discord_id = ?";
        DiscordUser user = null;

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, discord_id);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    int patchatMemberId = rs.getInt("patchat_member_id");
                    String discordId = rs.getString("discord_id");
                    String username = rs.getString("username");
                    String nickname = rs.getString("nickname");

                    user = DiscordUser.newBuilder()
                            .setPatchatMemberId(patchatMemberId)
                            .setDiscordId(discordId)
                            .setUsername(username)
                            .setNickname(nickname)
                            .build();
                }
            }
        } catch (SQLException e) {
            return null;
            //            throw new RuntimeException("Error while retrieving discord user by discord id", e);
        }

        return user;
    }

    public List<DiscordUser> listDiscordUsers() {
        String sql = "SELECT patchat_member_id, discord_id, username, nickname FROM discord_user";

        List<DiscordUser> users = new ArrayList<>();

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    int patchatMemberId = rs.getInt("patchat_member_id");
                    String discordId = rs.getString("discord_id");
                    String username = rs.getString("username");
                    String nickname = rs.getString("nickname");
                    DiscordUser user = DiscordUser.newBuilder()
                            .setPatchatMemberId(patchatMemberId)
                            .setDiscordId(discordId)
                            .setUsername(username)
                            .setNickname(nickname)
                            .build();

                    users.add(user);
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving all members", e);
        }
        return users;
    }

    public DiscordUser addDiscordUser(DiscordUser user) {

        String sql = "INSERT INTO discord_user (patchat_member_id, discord_id, username, nickname) "
                + "VALUES (?, ?, ?, ?) RETURNING patchat_member_id, discord_id, username, nickname";

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, user.getPatchatMemberId());
            stmt.setString(2, user.getDiscordId());
            stmt.setString(3, user.getUsername());
            stmt.setString(4, user.getNickname());

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    int patchatMemberId = rs.getInt("patchat_member_id");
                    String discordId = rs.getString("discord_id");
                    String username = rs.getString("username");
                    String nickname = rs.getString("nickname");
                    return DiscordUser.newBuilder()
                            .setPatchatMemberId(patchatMemberId)
                            .setDiscordId(discordId)
                            .setUsername(username)
                            .setNickname(nickname)
                            .build();
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while adding patchat member", e);
        }

        return null;
    }

    public DiscordUser deleteDiscordUser(int patchat_member_id) {
        return null;
    }
}
