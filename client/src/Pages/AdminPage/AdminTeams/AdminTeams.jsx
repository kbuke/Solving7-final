import { useState } from "react"
import { AdminInstance } from "../../../Components/AdminInstance"
import { AdminSections } from "../../../Components/AdminSections"
import { PostTeam } from "./CRUD Actions/PostTeam"
import { DeleteTeam } from "./CRUD Actions/DeleteTeam"
import { PatchTeam } from "./CRUD Actions/PatchTeam"
import { useFetch } from "../../../Hooks/useFetch"

export function AdminTeams({
    appData,
    isLoading,
    setIsLoading
}){
    const [teamAction, setTeamAction] = useState()
    const [selectedTeamId, setSelectedTeamId] = useState()
    const [selectedTeam, setSelectedTeam] = useState()

    useFetch(`/api/teams/${selectedTeamId}`, setSelectedTeam, [selectedTeamId])

    const allTeams = appData?.allTeams
    const setAllTeams = appData?.setAllTeams

    return(
        <>
            <AdminSections 
                bgColour="green"
                sectionTitle={"Teams"}
                setInstanceAction={setTeamAction}
                table={allTeams?.map((team, index) => (
                    <AdminInstance 
                        key={team.id}
                        index={index}
                        total={allTeams.length}
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
                    selectedTeam={selectedTeam}
                />
                : teamAction === "patch"
                ? <PatchTeam 
                    selectedTeamId={selectedTeamId}
                    setAllTeams={setAllTeams}
                    setTeamAction={setTeamAction}
                    selectedTeam={selectedTeam}
                />
                : null
            }
        </>
    )
}