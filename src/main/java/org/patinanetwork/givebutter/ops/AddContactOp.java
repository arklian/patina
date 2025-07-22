package org.patinanetwork.givebutter.ops;

import org.patinanetwork.givebutter.email.GiveButterEmailClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AddContactOp {
    private static final Logger logger = LoggerFactory.getLogger(AddContactOp.class);
    GiveButterEmailClient emailClient;

    public AddContactOp(GiveButterEmailClient emailClient) {
        this.emailClient = emailClient;
    }

    public void run() {
        String authCode = emailClient.getGiveButterAuthCode();
        logger.info(authCode);
    }
}
