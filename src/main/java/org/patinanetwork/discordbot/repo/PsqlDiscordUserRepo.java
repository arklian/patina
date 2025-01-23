package org.patinanetwork.discordbot.repo;

import org.patinanetwork.discordbot.protos.DiscordUser;
import org.springframework.stereotype.Component;

import java.util.List;

@Component(value = "PsqlDiscordUserRepo")
public class PsqlDiscordUserRepo implements DiscordUserRepo {
    public DiscordUser getDiscordUser(int patchat_member_id) {
        return null;
    }

    public List<DiscordUser> listDiscordUsers() {
        return List.of();
    }

    public DiscordUser deleteDiscordUser(int patchat_member_id) {
        return null;
    }

    public DiscordUser addDiscordUser(DiscordUser member) {
        return null;
    }
}
