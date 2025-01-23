package org.patinanetwork.discordbot.ops;

import org.patinanetwork.discordbot.protos.DiscordUser;
import org.patinanetwork.discordbot.protos.ListDiscordUsersResp;
import org.patinanetwork.discordbot.repo.DiscordUserRepo;

import java.util.List;

/**
 * Operation to handle the listDiscordUsers endpoint
 */
public class ListDiscordUserOp {
    DiscordUserRepo discordUserRepo;

    public ListDiscordUserOp(DiscordUserRepo discordUserRepo) {
        this.discordUserRepo = discordUserRepo;
    }

    public ListDiscordUsersResp run() {
        List<DiscordUser> users = discordUserRepo.listDiscordUsers();

        return ListDiscordUsersResp.newBuilder().addAllMembers(users).build();
    }
}
