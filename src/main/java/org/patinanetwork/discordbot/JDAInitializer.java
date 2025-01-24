package org.patinanetwork.discordbot;

import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.interactions.commands.build.Commands;
import net.dv8tion.jda.api.requests.GatewayIntent;
import net.dv8tion.jda.api.requests.restaction.CommandListUpdateAction;
import net.dv8tion.jda.api.utils.ChunkingFilter;
import net.dv8tion.jda.api.utils.MemberCachePolicy;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import static net.dv8tion.jda.api.interactions.commands.OptionType.STRING;

@Component
@EnableConfigurationProperties(JDAProperties.class)
public class JDAInitializer implements CommandLineRunner {
    final JDAProperties jdaProperties;
    private final JDAEventListener jdaEventListener;

    // Constructor injection
    public JDAInitializer(JDAProperties jdaProperties, JDAEventListener jdaEventListener) {
        this.jdaProperties = jdaProperties;
        this.jdaEventListener = jdaEventListener;
    }

    @Override
    public void run(String... args) throws Exception {
        JDA jda = JDABuilder.createDefault(jdaProperties.getToken())
                .enableIntents(GatewayIntent.GUILD_MESSAGES, GatewayIntent.GUILD_MEMBERS)
                .setChunkingFilter(ChunkingFilter.ALL)
                .setMemberCachePolicy(MemberCachePolicy.ALL)
                .addEventListeners(jdaEventListener)
                .build();
        jda.awaitReady();

        // These commands might take a few minutes to be active after creation/update/delete
        CommandListUpdateAction commands = jda.updateCommands()
                .addCommands(
                        Commands.slash("say", "Makes the bot say what you tell it to")
                                .addOption(
                                        STRING,
                                        "content",
                                        "What the bot should say",
                                        true), // you can add required options like this too
                        Commands.slash("patchat_join", "Enters you into the weekly Patchats meeting."),
                        Commands.slash("patchat_leave", "Opt out from Patchat meetings until specified."));

        commands.queue();
    }
}
