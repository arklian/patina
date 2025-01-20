package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.repo.PatChatRepo;
import org.patinanetwork.patchats.protos.GetPatChatMemberReq;
import org.patinanetwork.patchats.protos.GetPatChatMemberResp;
import org.patinanetwork.patchats.protos.PatChatMember;

/**
 * Operation to handle the getPatChatMember endpoint
 */
public class GetPatChatMemberOp {
    PatChatRepo patChatRepo;

    public GetPatChatMemberOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public GetPatChatMemberResp run(GetPatChatMemberReq request) {
        PatChatMember member = patChatRepo.getPatChatMember(request.getId());

        return GetPatChatMemberResp.newBuilder().setMember(member).build();
    }
}
