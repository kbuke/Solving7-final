import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteTeamMember({
    selectedTeamMemberId,
    setAllTeamMembers,
    setTeamMemberAction,
    selectedTeamMember
}){
    const handleDeleteTeamMember = () => {
        useDelete(
            `/api/members/${selectedTeamMemberId}`,
            setAllTeamMembers,
            selectedTeamMemberId,
            setTeamMemberAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Member"}
            handleInstanceSubmit={handleDeleteTeamMember}
            instanceName={selectedTeamMember?.name}
        />
    )
}