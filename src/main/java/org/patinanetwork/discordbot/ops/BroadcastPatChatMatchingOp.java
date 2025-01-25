package org.patinanetwork.discordbot.ops;

import net.dv8tion.jda.api.JDA;
import org.patinanetwork.discordbot.protos.DiscordUser;
import org.patinanetwork.discordbot.repo.DiscordUserRepo;
import org.patinanetwork.patchats.PatChatClient;
import org.patinanetwork.patchats.protos.MatchGroup;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class BroadcastPatChatMatchingOp {
    DiscordUserRepo discordUserRepo;
    PatChatClient patChatClient;
    JDA jda;

    public BroadcastPatChatMatchingOp(DiscordUserRepo discordUserRepo, PatChatClient patChatClient, JDA jda) {
        this.discordUserRepo = discordUserRepo;
        this.patChatClient = patChatClient;
        this.jda = jda;
    }

    public void run() {
        List<MatchGroup> members = patChatClient.matchPatChatMember().getPairsList();
        List<DiscordUser> discordUsers = discordUserRepo.listDiscordUsers();

        Map<Integer, DiscordUser> discordUserMap =
                discordUsers.stream().collect(Collectors.toMap(DiscordUser::getPatchatMemberId, user -> user));
        for (int i = 0; i < members.size(); i++) {
            String member1 =
                    discordUserMap.get(members.get(i).getMembers(0).getId()).getDiscordId();
            String member2 =
                    discordUserMap.get(members.get(i).getMembers(1).getId()).getDiscordId();
            dmDiscordUser(member1);
            dmDiscordUser(member2);
        }
    }

    public void dmDiscordUser(String discord_id) {
        jda.retrieveUserById(discord_id)
                .queue(
                        // Handle success if the user exists
                        (user) -> user.openPrivateChannel()
                                .queue((channel) -> channel.sendMessage("Hi").queue()),

                        // Handle failure if the user does not exist (or another issue appeared)
                        (error) -> error.printStackTrace());

        jda.retrieveUserById(discord_id).queue(user -> user.openPrivateChannel().queue());
    }
}
