package org.patinanetwork.discordbot;

import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import org.patinanetwork.patchats.PatChatClient;
import org.patinanetwork.patchats.protos.AddPatChatMemberReq;
import org.springframework.stereotype.Component;

@Component
public class JDAEventListener extends ListenerAdapter {
    PatChatClient patChatClient;

    public JDAEventListener(PatChatClient patChatClient) {
        this.patChatClient = patChatClient;
    }

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        // Only accept commands from guilds
        if (event.getGuild() == null) return;
        switch (event.getName()) {
            case "say":
                say(event, event.getOption("content").getAsString()); // content is required so no null-check here
                break;
            case "join_patchats":
                joinPatChats(event);
                break;
            default:
                event.reply("I can't handle that command right now :(")
                        .setEphemeral(true)
                        .queue();
        }
    }

    public void say(SlashCommandInteractionEvent event, String content) {
        event.reply(content).queue(); // This requires no permissions!
    }

    public void joinPatChats(SlashCommandInteractionEvent event) {
        String memberName = event.getUser().getEffectiveName();

        try {
            patChatClient.addPatChatMember(
                    AddPatChatMemberReq.newBuilder().setName(memberName).build());
            event.reply("Successfully added.").setEphemeral(true).queue();
        } catch (Exception e) {
            event.reply("Something went wrong.").setEphemeral(true).queue();
        }
    }
}
