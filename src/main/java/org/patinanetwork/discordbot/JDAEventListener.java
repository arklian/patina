package org.patinanetwork.discordbot;

import net.dv8tion.jda.api.events.interaction.ModalInteractionEvent;
import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.components.ActionRow;
import net.dv8tion.jda.api.interactions.components.text.TextInput;
import net.dv8tion.jda.api.interactions.components.text.TextInputStyle;
import net.dv8tion.jda.api.interactions.modals.Modal;
import org.patinanetwork.patchats.PatChatClient;
import org.patinanetwork.patchats.protos.AddPatChatMemberReq;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.View;

@Component
public class JDAEventListener extends ListenerAdapter {
    private final View error;
    PatChatClient patChatClient;

    public JDAEventListener(PatChatClient patChatClient, View error) {
        this.patChatClient = patChatClient;
        this.error = error;
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

        TextInput name = TextInput.create("full_name", "Full Name", TextInputStyle.SHORT)
                .setPlaceholder("Enter your full name")
                .setMinLength(2)
                .setRequired(true)
                .build();

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
                            System.out.println(
                                    "DM could not be sent to " + event.getUser().getName());
                        });
    }

    @Override
    public void onModalInteraction(ModalInteractionEvent event) {
        System.out.println(event.getModalId());
        if ("patchats_modal".equals(event.getModalId())) {
            String fullName = event.getValue("full_name").getAsString();

            try {
                patChatClient.addPatChatMember(
                        AddPatChatMemberReq.newBuilder().setName(fullName).build());
                event.reply("Thank you, " + fullName + "! You have been added to the database.")
                        .setEphemeral(true)
                        .queue();
                System.out.println("New member added: " + fullName);
            } catch (Exception e) {
                event.reply("Something went wrong.").setEphemeral(true).queue();
                e.printStackTrace();
            }
        }
    }
}
