import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"

export function PostMemberTeam({
    allTeams,
    selectedMemberId,
    setAllMemberTeams,
    setMemberTeamsAction,
    isLoading,
    setIsLoading,
    selectedTeamMember
}){
    const definedTeams = selectedTeamMember?.teams
    
    const selectedTeamIds = new Set(
        definedTeams?.map(team => team.id)
    )

    const teamOptions = allTeams?.filter(team => (
        !selectedTeamIds?.has(team.id)
    )).map(team => ({
        label: team.name,
        value: team.id
    }))

    const newTeamInput = [
        {
            type: "select",
            label: "Please select team",
            name: "selectedTeam",
            options: teamOptions,
            validation: {
                required: "Please select a team"
            }
        }
    ]

    const handleMemberTeamPost = (formData) => {
        console.log(formData)
        const payload = {
            memberId: selectedMemberId,
            teamId: formData.selectedTeam.value
        }

        console.log(payload)

        usePost({
            url: "/api/memberteams",
            body: payload,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newMemberTeam) => {
                setAllMemberTeams(prev => [...prev, newMemberTeam])
                setMemberTeamsAction(null)
            },
            setEndActionState: setMemberTeamsAction
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Member Team"}
            inputArray={newTeamInput}
            handleInstanceSubmit={handleMemberTeamPost}
        />
    )

}