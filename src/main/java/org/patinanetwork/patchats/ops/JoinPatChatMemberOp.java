package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.protos.JoinPatChatMemberReq;
import org.patinanetwork.patchats.protos.JoinPatChatMemberResp;
import org.patinanetwork.patchats.protos.PatChatMember;
import org.patinanetwork.patchats.repo.PatChatRepo;

public class JoinPatChatMemberOp {
    PatChatRepo patChatRepo;

    public JoinPatChatMemberOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public JoinPatChatMemberResp run(JoinPatChatMemberReq request) {
        PatChatMember member = patChatRepo.joinPatChatMember(request.getId());
        return JoinPatChatMemberResp.newBuilder().setMember(member).build();
    }
}
