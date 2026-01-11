import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"

export function PostTeam({
    setAllTeams,
    setTeamAction,
    isLoading,
    setIsLoading
}){
    const newTeamInputs = [
        {
            type: "text",
            placeholder: "Please enter team name",
            className: "text-input-container",
            name: "teamName",
            validation: {
                required: "Please enter the name of the team"
            }
        },

        {
            type: "textarea",
            placeholder: "Please enter team info",
            className: "team-text-area",
            name: "teamIntro",
            validation: {
                required: "Please enter information about this team."
            }
        }
    ]

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
            instanceType={"Team"}
            inputArray={newTeamInputs}
            handleInstanceSubmit={handleTeamPost}
        />
    )
}