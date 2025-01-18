package org.patinanetwork.patchats.repo;

import org.patinanetwork.patinawebsite.blogs.protos.PatChatMember;
import org.springframework.stereotype.Component;

@Component(value = "PsqlPatChatRepo")
public class PsqlPatChatRepo implements PatChatRepo {
    @Override
    public PatChatMember getPatChatMember(int i) {
        return PatChatMember.newBuilder().setId(1).setName("Test Dummy").setActive(true).build();
    }
}
