import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteMemberTeam({
    teamId,
    memberId,
    allMemberTeams,
    setAllMemberTeams,
    setMemberTeamAction
}){
    console.log(`deleteing member: ${memberId} from team ${teamId}`)
    console.log(allMemberTeams)

    const selectedMemberTeam = allMemberTeams?.find(memberTeam => (
        memberTeam.member_id === memberId &&
        memberTeam.team_id === teamId
    ))

    console.log(selectedMemberTeam)

    const handleDeleteMemberTeam = () => {
        useDelete(
            `/api/memberteams/${selectedMemberTeam?.id}`,
            setAllMemberTeams,
            selectedMemberTeam?.id,
            setMemberTeamAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Member-Team"}
            handleInstanceSubmit={handleDeleteMemberTeam}
            instanceName={("")}
        />
    )
}