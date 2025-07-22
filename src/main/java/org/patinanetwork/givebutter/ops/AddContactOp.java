package org.patinanetwork.givebutter.ops;

import org.patinanetwork.givebutter.email.GiveButterEmailClient;
import org.patinanetwork.givebutter.util.GiveButterAuth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AddContactOp {
    private static final Logger logger = LoggerFactory.getLogger(AddContactOp.class);
    GiveButterEmailClient emailClient;
    GiveButterAuth giveButterAuth;

    public AddContactOp(GiveButterEmailClient emailClient, GiveButterAuth giveButterAuth) {
        this.emailClient = emailClient;
        this.giveButterAuth = giveButterAuth;
    }

    public void run() {
        logger.info("Running AddContactOp");

        //        String authCode = emailClient.getGiveButterAuthCode();
        giveButterAuth.authenticate();
        //                logger.info(authCode);
    }
}
