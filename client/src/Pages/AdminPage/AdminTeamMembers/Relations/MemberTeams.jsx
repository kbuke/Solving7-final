import { useState } from "react";
import { PopUp } from "../../../../Components/PopUp";
import { PostMemberTeam } from "./PostMemberTeam";
import { DeleteMemberTeam } from "./DeleteMemberTeam";

export function MemberTeams({
    appData,
    selectedTeamMemberId,
    setSelectedTeamMemberId,
    memberName,
    selectedTeamMember
}){
    const [memberTeamAction, setMemberTeamAction] = useState()
    const [teamId, setTeamId] = useState()

    const allTeams = appData?.allTeams

    const allMemberTeams = appData?.allMemberTeams
    const setAllMemberTeams = appData?.setAllMemberTeams

    const memberTeams = selectedTeamMember?.teams

    return(
        <>
            <PopUp 
                type={"relational"}
                relationArray={memberTeams}
                relationKey={"name"}
                instanceName={`${memberName} Teams`}
                setRelationalId={setTeamId}
                setRelationAction={setMemberTeamAction}
            />

            {memberTeamAction === "post"
                ? <PostMemberTeam 
                    allTeams={allTeams}
                    selectedMemberId={selectedTeamMemberId}
                    setAllMemberTeams={setAllMemberTeams}
                    setMemberTeamsAction={setMemberTeamAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                    selectedTeamMember={selectedTeamMember}
                />
                : memberTeamAction === "delete"
                ? <DeleteMemberTeam 
                    teamId={teamId}
                    memberId={selectedTeamMemberId}
                    allMemberTeams={allMemberTeams}
                    setAllMemberTeams={setAllMemberTeams}
                    setMemberTeamsAction={setMemberTeamAction}
                />
                : null
            }
        </>
    )
}