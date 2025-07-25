package org.patinanetwork.givebutter;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.givebutter.email.GiveButterEmailClient;
import org.patinanetwork.givebutter.ops.AddContactOp;
import org.patinanetwork.givebutter.util.GiveButterAuth;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class GiveButterController {

    GiveButterAuth giveButterAuth;
    GiveButterEmailClient emailClient;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public GiveButterController(
            GiveButterEmailClient emailClient,
            GiveButterAuth giveButterAuth,
            JsonPrinter jsonPrinter,
            JsonParser jsonParser) {
        this.emailClient = emailClient;
        this.giveButterAuth = giveButterAuth;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @PostMapping(value = "/api/givebutter/signup", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void framerSignupFormWebhook(
            @RequestHeader(value = "User-Agent") String userAgent,
            @RequestHeader(value = "Framer-Signature") String framerSignature,
            @RequestHeader(value = "framer-webhook-submission-id") String framerWebhookSubmissionId,
            @RequestBody String jsonRequest) {
        System.out.println("New Framer Form Request: ");
        System.out.println(userAgent);
        System.out.println(framerSignature);
        System.out.println(framerWebhookSubmissionId);
        System.out.println(jsonRequest);
        return;
    }

    @GetMapping(value = "/api/givebutter/test")
    public String giveButterTest() {
        AddContactOp op = new AddContactOp(emailClient, giveButterAuth);
        op.run();
        return "{}";
    }

    @GetMapping(value = "/api/givebutter/test2")
    public String giveButterTest2() {
        giveButterAuth.useSessionState();
        return "{}";
    }
}
