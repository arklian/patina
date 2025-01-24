package org.patinanetwork.discordbot;

import org.patinanetwork.discordbot.ops.AddDiscordUserOp;
import org.patinanetwork.discordbot.ops.GetDiscordUserOp;
import org.patinanetwork.discordbot.ops.ListDiscordUserOp;
import org.patinanetwork.discordbot.protos.AddDiscordUserReq;
import org.patinanetwork.discordbot.protos.AddDiscordUserResp;
import org.patinanetwork.discordbot.protos.GetDiscordUserReq;
import org.patinanetwork.discordbot.protos.GetDiscordUserResp;
import org.patinanetwork.discordbot.protos.ListDiscordUsersResp;
import org.patinanetwork.discordbot.repo.DiscordUserRepo;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

/**
 * Controllers outside DiscordUser should interact with DiscordUser database through this client
 */
@Component
public class DiscordUserClient {
    DiscordUserRepo discordUserRepo;

    public DiscordUserClient(@Qualifier("PsqlDiscordUserRepo") DiscordUserRepo discordUserRepo) {
        this.discordUserRepo = discordUserRepo;
    }

    public GetDiscordUserResp getDiscordUser(GetDiscordUserReq req) {
        return new GetDiscordUserOp(discordUserRepo).run(req);
    }

    public ListDiscordUsersResp listDiscordUsers(ListDiscordUsersResp req) {
        return new ListDiscordUserOp(discordUserRepo).run();
    }

    public AddDiscordUserResp addDiscordUser(AddDiscordUserReq req) {
        return new AddDiscordUserOp(discordUserRepo).run(req);
    }
}
