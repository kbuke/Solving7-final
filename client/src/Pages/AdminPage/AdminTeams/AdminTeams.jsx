import { useState } from "react"
import { AdminInstance } from "../../../Components/AdminInstance"
import { AdminSections } from "../../../Components/AdminSections"
import { PostTeam } from "./CRUD Actions/PostTeam"
import { DeleteTeam } from "./CRUD Actions/DeleteTeam"

export function AdminTeams({
    appData,
    isLoading,
    setIsLoading
}){
    const [teamAction, setTeamAction] = useState()
    const [selectedTeamId, setSelectedTeamId] = useState()

    const allTeams = appData?.allTeams
    const setAllTeams = appData?.setAllTeams

    return(
        <>
            <AdminSections 
                bgColour="bg-blue-200/40"
                sectionTitle={"Teams"}
                setInstanceAction={setTeamAction}
                table={allTeams?.map((team) => (
                    <AdminInstance 
                        key={team.id}
                        title="Team Name:"
                        hiddenValue={team.name}
                        setInstanceAction={setTeamAction}
                        setSelectedId={setSelectedTeamId}
                        chosenId={team?.id}
                        fields={[
                            {
                                label: "Pillar Intro:",
                                type: "text",
                                value: team.intro
                            }
                        ]} 
                    />
                ))}
            />

            {teamAction === "post"
                ? <PostTeam 
                    setAllTeams={setAllTeams}
                    setTeamAction={setTeamAction}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                : teamAction === "delete"
                ? <DeleteTeam 
                    selectedTeamId={selectedTeamId}
                    setAllTeams={setAllTeams}
                    setTeamAction={setTeamAction}
                />
                : null
            }
        </>
    )
}