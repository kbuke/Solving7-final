import { PopUp } from "../../../../Components/PopUp";
import { usePatch } from "../../../../Hooks/usePatch";
import { TeamMemberInputs } from "../TeamMemberComponents/TeamMemberInputs";

export function PatchTeamMember({
    selectedMemberId,
    setAllMembers,
    setMemberAction,
    selectedMember
}){
    //ENSURE USERS WILL BE ABLE TO CHANGE PASSWORD ELSEWHERE
    // ENSURE ONLY PERSON WHO CAN CHANGE INFO IS LOGGED USER
    if (!selectedMember) return null

    const teamMemberInputs = TeamMemberInputs()
    const patchMemberArray = teamMemberInputs.slice(0, -1)
    

    const patchUserObject = [
        { key: "name", accessor: "name" },
        { key: "img", accessor: "img" },
        { key: "intro", accessor: "intro" },
        { key: "email", accessor: "email" },
    ]

    const handleMemberEdit = (formData) => {
        const patchData = {
            name: formData.name,
            img: formData.img,
            intro: formData.intro,
            email: formData.email
        }

        usePatch(
            patchData,
            `/api/members/${selectedMemberId}`,
            selectedMemberId,
            setAllMembers,
            setMemberAction
        )
    }

    return (
        <PopUp 
            type="patch"
            instanceType="Member"
            instanceName={selectedMember.name}
            patchReset={patchUserObject}
            selectedInstance={selectedMember}
            inputArray={patchMemberArray}
            handleInstanceSubmit={handleMemberEdit}
            setState={setMemberAction}
        />
    )
}
