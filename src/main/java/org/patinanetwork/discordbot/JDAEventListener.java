package org.patinanetwork.discordbot;

import net.dv8tion.jda.api.entities.User;
import net.dv8tion.jda.api.events.interaction.ModalInteractionEvent;
import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.components.ActionRow;
import net.dv8tion.jda.api.interactions.components.text.TextInput;
import net.dv8tion.jda.api.interactions.components.text.TextInputStyle;
import net.dv8tion.jda.api.interactions.modals.Modal;
import org.patinanetwork.discordbot.protos.AddDiscordUserReq;
import org.patinanetwork.discordbot.protos.GetDiscordUserReq;
import org.patinanetwork.patchats.PatChatClient;
import org.patinanetwork.patchats.protos.AddPatChatMemberReq;
import org.patinanetwork.patchats.protos.JoinPatChatMemberReq;
import org.patinanetwork.patchats.protos.LeavePatChatMemberReq;
import org.springframework.stereotype.Component;

@Component
public class JDAEventListener extends ListenerAdapter {
    DiscordUserClient discordUserClient;
    PatChatClient patChatClient;

    public JDAEventListener(PatChatClient patChatClient, DiscordUserClient discordUserClient) {
        this.patChatClient = patChatClient;
        this.discordUserClient = discordUserClient;
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
            case "leave_patchats":
                leavePatChats(event);
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
        TextInput name = TextInput.create("full_name", "Full Name", TextInputStyle.SHORT)
                .setPlaceholder("Enter your full name")
                .setMinLength(2)
                .setRequired(true)
                .build();

        User user = event.getUser();
        GetDiscordUserReq request =
                GetDiscordUserReq.newBuilder().setDiscordId(user.getId()).build();

        var response = discordUserClient.getDiscordUser(request);

        // Check if the user already exists in the system
        if (response.hasMember() && !response.getMember().getDiscordId().isEmpty()) {
            // User exists, set their active status to true

            int patChatId = response.getMember().getPatchatMemberId();
            JoinPatChatMemberReq joinRequest =
                    JoinPatChatMemberReq.newBuilder().setId(patChatId).build();

            patChatClient.joinPatChatMember(joinRequest);

            event.reply("You have successfully joined PatChats!")
                    .setEphemeral(true)
                    .queue();
            return;
        } else {
            Modal modal = Modal.create("patchats_modal", "Patchats")
                    .addComponents(ActionRow.of(name))
                    .build();

            event.replyModal(modal).queue();
            event.getUser()
                    .openPrivateChannel()
                    .queue(
                            channel -> {
                                channel.sendMessage(
                                                "Hi " + event.getUser().getName()
                                                        + ", you initiated the PatChats registration process. Please complete the form to join!")
                                        .queue(
                                                success -> System.out.println("DM sent successfully to "
                                                        + event.getUser().getName()),
                                                error -> System.out.println("DM could not be sent to "
                                                        + event.getUser().getName()));
                            },
                            error -> {
                                System.out.println("DM could not be sent to "
                                        + event.getUser().getName());
                            });
        }
    }

    @Override
    public void onModalInteraction(ModalInteractionEvent event) {
        User user = event.getUser();
        try {
            // If the user doesn't exist, handle the new addition
            if ("patchats_modal".equals(event.getModalId())) {
                String fullName = event.getValue("full_name").getAsString();

                // Add the user to PatChat and get the member ID
                var newPatChatMemberId = patChatClient
                        .addPatChatMember(AddPatChatMemberReq.newBuilder()
                                .setName(fullName)
                                .build())
                        .getMember()
                        .getId();

                // Add the user to DiscordUser table
                discordUserClient.addDiscordUser(AddDiscordUserReq.newBuilder()
                        .setPatchatMemberId(newPatChatMemberId)
                        .setDiscordId(user.getId())
                        .setUsername(user.getName())
                        .setNickname(user.getEffectiveName())
                        .build());

                event.reply("User successfully added to the system!")
                        .setEphemeral(true)
                        .queue();
            }
        } catch (Exception e) {
            e.printStackTrace();
            event.reply("Something went wrong while processing your request.")
                    .setEphemeral(true)
                    .queue();
        }
    }

    public void leavePatChats(SlashCommandInteractionEvent event) {
        User user = event.getUser();
        GetDiscordUserReq request =
                GetDiscordUserReq.newBuilder().setDiscordId(user.getId()).build();

        var response = discordUserClient.getDiscordUser(request);

        // Check if the user already exists in the system
        if (response.hasMember() && !response.getMember().getDiscordId().isEmpty()) {
            // User exists, set their active status to false

            int patChatId = response.getMember().getPatchatMemberId();
            LeavePatChatMemberReq leaveRequest =
                    LeavePatChatMemberReq.newBuilder().setId(patChatId).build();

            patChatClient.leavePatChatMember(leaveRequest);

            event.reply("You have left PatChats!").setEphemeral(true).queue();
            return;
        } else {
            event.reply("Please join the PatChats first!").setEphemeral(true).queue();
        }
    }
}
