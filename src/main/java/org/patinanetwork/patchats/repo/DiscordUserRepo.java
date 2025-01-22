package org.patinanetwork.patchats.repo;

import org.patinanetwork.patchats.protos.DiscordUser;

import java.util.List;

public interface DiscordUserRepo {
    public DiscordUser getDiscordUser(int id);

    public List<DiscordUser> listDiscordUsers();

    public DiscordUser deleteDiscordUser(int id);

    public DiscordUser addDiscordUser(DiscordUser member);
}
