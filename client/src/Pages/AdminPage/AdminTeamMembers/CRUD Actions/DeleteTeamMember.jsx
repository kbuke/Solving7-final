import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteTeamMember({
    selectedTeamMemberId,
    setAllTeamMembers,
    setTeamMemberAction,
    selectedTeamMember
}){
    // Ensure that when deleting a user that you must enter the deleted users password to confirm
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