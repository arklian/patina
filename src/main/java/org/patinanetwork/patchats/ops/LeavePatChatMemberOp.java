package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.protos.LeavePatChatMemberReq;
import org.patinanetwork.patchats.protos.LeavePatChatMemberResp;
import org.patinanetwork.patchats.protos.PatChatMember;
import org.patinanetwork.patchats.repo.PatChatRepo;

public class LeavePatChatMemberOp {
    PatChatRepo patChatRepo;

    public LeavePatChatMemberOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public LeavePatChatMemberResp run(LeavePatChatMemberReq request) {
        PatChatMember member = patChatRepo.leavePatChatMember(request.getId());
        return LeavePatChatMemberResp.newBuilder()
                .setMember(member)
                .build();
    }
}
