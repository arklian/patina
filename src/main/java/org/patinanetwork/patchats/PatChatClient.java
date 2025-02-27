package org.patinanetwork.patchats;

import org.patinanetwork.patchats.ops.AddPatChatMemberOp;
import org.patinanetwork.patchats.ops.DeletePatChatMemberOp;
import org.patinanetwork.patchats.ops.GetPatChatMemberOp;
import org.patinanetwork.patchats.ops.JoinPatChatMemberOp;
import org.patinanetwork.patchats.ops.LeavePatChatMemberOp;
import org.patinanetwork.patchats.ops.ListPatChatMembersOp;
import org.patinanetwork.patchats.ops.MatchPatChatMemberOp;
import org.patinanetwork.patchats.protos.AddPatChatMemberReq;
import org.patinanetwork.patchats.protos.AddPatChatMemberResp;
import org.patinanetwork.patchats.protos.DeletePatChatMemberReq;
import org.patinanetwork.patchats.protos.DeletePatChatMemberResp;
import org.patinanetwork.patchats.protos.GetPatChatMemberReq;
import org.patinanetwork.patchats.protos.GetPatChatMemberResp;
import org.patinanetwork.patchats.protos.JoinPatChatMemberReq;
import org.patinanetwork.patchats.protos.JoinPatChatMemberResp;
import org.patinanetwork.patchats.protos.LeavePatChatMemberReq;
import org.patinanetwork.patchats.protos.LeavePatChatMemberResp;
import org.patinanetwork.patchats.protos.ListPatChatMembersResp;
import org.patinanetwork.patchats.protos.MatchPatChatMemberResp;
import org.patinanetwork.patchats.repo.PatChatRepo;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

/**
 * Controllers outside PatChats should interact with PatChat database through this client
 */
@Component
public class PatChatClient {
    PatChatRepo patChatRepo;

    public PatChatClient(@Qualifier("PsqlPatChatRepo") PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public GetPatChatMemberResp getPatChatMember(GetPatChatMemberReq req) {
        return new GetPatChatMemberOp(patChatRepo).run(req);
    }

    public ListPatChatMembersResp listPatChatMembers(ListPatChatMembersResp req) {
        return new ListPatChatMembersOp(patChatRepo).run();
    }

    public DeletePatChatMemberResp deletePatChatMember(DeletePatChatMemberReq req) {
        return new DeletePatChatMemberOp(patChatRepo).run(req);
    }

    public AddPatChatMemberResp addPatChatMember(AddPatChatMemberReq req) {
        return new AddPatChatMemberOp(patChatRepo).run(req);
    }

    public LeavePatChatMemberResp leavePatChatMember(LeavePatChatMemberReq req) {
        return new LeavePatChatMemberOp(patChatRepo).run(req);
    }

    public JoinPatChatMemberResp joinPatChatMember(JoinPatChatMemberReq req) {
        return new JoinPatChatMemberOp(patChatRepo).run(req);
    }

    public MatchPatChatMemberResp matchPatChatMember() {
        return new MatchPatChatMemberOp(patChatRepo).run();
    }
}
