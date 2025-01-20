package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.repo.PatChatRepo;
import org.patinanetwork.patchats.protos.ListPatChatMembersReq;
import org.patinanetwork.patchats.protos.ListPatChatMembersResp;
import org.patinanetwork.patchats.protos.PatChatMember;

import java.util.List;

/**
 * Operation to handle the listPatChatMembers endpoint
 */
public class ListPatChatMembersOp {
    PatChatRepo patChatRepo;

    public ListPatChatMembersOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public ListPatChatMembersResp run() {
        List<PatChatMember> members = patChatRepo.listPatChatMembers();

        return ListPatChatMembersResp.newBuilder().addAllMembers(members).build();
    }
}
