import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import {TeamMemberInputs} from "../TeamMemberComponents/TeamMemberInputs"

export function PostTeamMember({
    setAllTeamMembers,
    setTeamMemberAction,
    isLoading,
    setIsLoading
}){
    const handleProductPost = (formData) => {
        usePost({
            url: "/api/members",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newMember) => {
                setAllTeamMembers(prev => [...prev, newMember])
                setTeamMemberAction(null)
            },
            setEndActionState: setTeamMemberAction
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Team Member"}
            inputArray={TeamMemberInputs()}
            handleInstanceSubmit={handleProductPost}
        />
    )
}