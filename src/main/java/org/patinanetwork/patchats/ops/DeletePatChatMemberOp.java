package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.repo.PatChatRepo;
import org.patinanetwork.patchats.protos.DeletePatChatMemberReq;
import org.patinanetwork.patchats.protos.DeletePatChatMemberResp;
import org.patinanetwork.patchats.protos.PatChatMember;

/**
 * Operation to handle the deletePatChatMember endpoint
 */
public class DeletePatChatMemberOp {
    PatChatRepo patChatRepo;

    public DeletePatChatMemberOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public DeletePatChatMemberResp run(DeletePatChatMemberReq request) {
        PatChatMember member = patChatRepo.deletePatChatMember(request.getId());
        if (member != null && member != PatChatMember.getDefaultInstance()) {
            return DeletePatChatMemberResp.newBuilder()
                    .setMember(member)
                    .build();
        }
        return null;
    }
}
