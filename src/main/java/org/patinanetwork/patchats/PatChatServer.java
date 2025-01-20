package org.patinanetwork.patchats;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patchats.ops.GetPatChatMemberOp;
import org.patinanetwork.patchats.repo.PatChatRepo;
import org.patinanetwork.patinawebsite.blogs.protos.GetPatChatMemberReq;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class PatChatServer {

    PatChatRepo patChatRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public PatChatServer(
            @Qualifier("PsqlPatChatRepo") PatChatRepo patChatRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.patChatRepo = patChatRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/patchats/{memberId}")
    public String getPatChatMembers(@PathVariable("memberId") int memberId) {
        var req = GetPatChatMemberReq.newBuilder().setId(memberId).build();
        GetPatChatMemberOp op = new GetPatChatMemberOp(patChatRepo);
        return jsonPrinter.print(op.run(req));
    }
}
