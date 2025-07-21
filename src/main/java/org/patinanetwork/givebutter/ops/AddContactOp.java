package org.patinanetwork.givebutter.ops;

import org.patinanetwork.givebutter.email.GiveButterEmailClient;

public class AddContactOp {
    GiveButterEmailClient emailClient;

    public AddContactOp(GiveButterEmailClient emailClient) {
        this.emailClient = emailClient;
    }

    public void run() {
        String authCode = emailClient.getGiveButterAuthCode();
        System.out.println(authCode);
    }
}
