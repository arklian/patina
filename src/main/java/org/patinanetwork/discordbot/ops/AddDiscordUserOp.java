package org.patinanetwork.discordbot.ops;

import org.patinanetwork.discordbot.protos.AddDiscordUserReq;
import org.patinanetwork.discordbot.protos.AddDiscordUserResp;
import org.patinanetwork.discordbot.protos.DiscordUser;
import org.patinanetwork.discordbot.repo.DiscordUserRepo;

public class AddDiscordUserOp {
    private final DiscordUserRepo discordUserRepo;

    public AddDiscordUserOp(DiscordUserRepo discordUserRepo) {
        this.discordUserRepo = discordUserRepo;
    }

    public AddDiscordUserResp run(AddDiscordUserReq addDiscordUserReq) {

        DiscordUser user = DiscordUser.newBuilder()
                .setPatchatMemberId(addDiscordUserReq.getPatchatMemberId())
                .setDiscordId(addDiscordUserReq.getDiscordId())
                .setUsername(addDiscordUserReq.getUsername())
                .setNickname(addDiscordUserReq.getNickname())
                .build();

        DiscordUser savedMember = discordUserRepo.addDiscordUser(user);

        return AddDiscordUserResp.newBuilder().setMember(savedMember).build();
    }
}
