import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import { TeamInputs } from "../TeamComponents/TeamInputs"

export function PostTeam({
    setAllTeams,
    setTeamAction,
    isLoading,
    setIsLoading
}){

    const handleTeamPost = (formData) => {
        usePost({
            url: "/api/teams",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newTeam) => {
                setAllTeams(prev => [...prev, newTeam])
                setTeamAction(null)
            },
            setEndActionState: setTeamAction
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Team"}
            inputArray={TeamInputs()}
            handleInstanceSubmit={handleTeamPost}
        />
    )
}