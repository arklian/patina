package org.patinanetwork.patchats.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patchats.protos.DiscordUser;

import java.sql.Connection;
import java.util.List;

public class PsqlDiscordUserRepo implements DiscordUserRepo {
    DBConnection dbConnection;
    Connection conn;

    public PsqlDiscordUserRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public DiscordUser getDiscordUser(int id) {
        return null;
    }

    @Override
    public List<DiscordUser> listDiscordUsers() {
        return List.of();
    }

    @Override
    public DiscordUser deleteDiscordUser(int id) {
        return null;
    }

    @Override
    public DiscordUser addDiscordUser(DiscordUser member) {
        return null;
    }
}
