package org.patinanetwork.discordbot;

import net.dv8tion.jda.api.JDA;
import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.discordbot.ops.AddDiscordUserOp;
import org.patinanetwork.discordbot.ops.BroadcastPatChatMatchingOp;
import org.patinanetwork.discordbot.ops.GetDiscordUserOp;
import org.patinanetwork.discordbot.ops.ListDiscordUserOp;
import org.patinanetwork.discordbot.protos.AddDiscordUserReq;
import org.patinanetwork.discordbot.protos.AddDiscordUserResp;
import org.patinanetwork.discordbot.protos.GetDiscordUserReq;
import org.patinanetwork.discordbot.protos.ListDiscordUsersReq;
import org.patinanetwork.discordbot.repo.DiscordUserRepo;
import org.patinanetwork.patchats.PatChatClient;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class DiscordUserController {
    DiscordUserRepo discordUserRepo;
    PatChatClient patChatClient;
    JDA jda;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public DiscordUserController(
            @Qualifier("PsqlDiscordUserRepo") DiscordUserRepo discordUserRepo,
            PatChatClient patChatClient,
            JDA jda,
            JsonPrinter jsonPrinter,
            JsonParser jsonParser) {
        this.discordUserRepo = discordUserRepo;
        this.patChatClient = patChatClient;
        this.jda = jda;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/discord/{discord_id}")
    public String getDiscordUser(@PathVariable("discord_id") String discord_id) {
        var req = GetDiscordUserReq.newBuilder().setDiscordId(discord_id).build();
        GetDiscordUserOp op = new GetDiscordUserOp(discordUserRepo);
        return jsonPrinter.print(op.run(req));
    }

    @GetMapping(value = "/api/discord/users")
    public String listDiscordUsers() {
        var req = ListDiscordUsersReq.newBuilder().build();
        ListDiscordUserOp op = new ListDiscordUserOp(discordUserRepo);
        return jsonPrinter.print(op.run());
    }

    @PostMapping(value = "/api/discord/adduser", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addDiscordUser(@RequestBody String jsonRequest) {
        AddDiscordUserReq req = jsonParser.parse(jsonRequest, AddDiscordUserReq.newBuilder());
        AddDiscordUserOp op = new AddDiscordUserOp(discordUserRepo);
        AddDiscordUserResp resp = op.run(req);
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/discord/patchats/broadcast/matching")
    public String broadcastPatChatMatchingOp() {
        BroadcastPatChatMatchingOp op = new BroadcastPatChatMatchingOp(discordUserRepo, patChatClient, jda);
        op.run();
        return null;
    }
}
