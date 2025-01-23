package org.patinanetwork.discordbot.ops;

import org.patinanetwork.discordbot.protos.DiscordUser;
import org.patinanetwork.discordbot.protos.GetDiscordUserReq;
import org.patinanetwork.discordbot.protos.GetDiscordUserResp;
import org.patinanetwork.discordbot.repo.DiscordUserRepo;

public class GetDiscordUserOp {

    DiscordUserRepo discordUserRepo;

    public GetDiscordUserOp(DiscordUserRepo discordUserRepo) {
        this.discordUserRepo = discordUserRepo;
    }

    public GetDiscordUserResp run(GetDiscordUserReq request) {
        DiscordUser member = discordUserRepo.getDiscordUser(request.getId());

        return GetDiscordUserResp.newBuilder().setMember(member).build();
    }
}
