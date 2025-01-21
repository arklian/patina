package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.protos.AddPatChatMemberReq;
import org.patinanetwork.patchats.protos.AddPatChatMemberResp;
import org.patinanetwork.patchats.protos.PatChatMember;
import org.patinanetwork.patchats.repo.PatChatRepo;

public class AddPatChatMemberOp {

    private final PatChatRepo patChatRepo;

    public AddPatChatMemberOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public AddPatChatMemberResp run(AddPatChatMemberReq addPatChatMemberReq) {
        PatChatMember member = PatChatMember.newBuilder()
                .setName(addPatChatMemberReq.getName())
                .setActive(true)
                .build();

        PatChatMember savedMember = patChatRepo.addPatChatMember(member);

        return AddPatChatMemberResp.newBuilder().setMember(savedMember).build();
    }
}
