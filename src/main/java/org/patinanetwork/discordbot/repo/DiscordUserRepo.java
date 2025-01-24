package org.patinanetwork.discordbot.repo;

import org.patinanetwork.discordbot.protos.DiscordUser;

import java.util.List;

public interface DiscordUserRepo {

    public DiscordUser getDiscordUser(String discordId);

    public List<DiscordUser> listDiscordUsers();

    public DiscordUser addDiscordUser(DiscordUser member);

    public DiscordUser deleteDiscordUser(int id);
}
