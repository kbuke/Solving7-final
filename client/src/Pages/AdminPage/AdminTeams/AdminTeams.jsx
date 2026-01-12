import { useState } from "react"
import { AdminInstance } from "../../../Components/AdminInstance"
import { AdminSections } from "../../../Components/AdminSections"
import { PostTeam } from "./CRUD Actions/PostTeam"

export function AdminTeams({
    appData,
    instanceButtons,
    isLoading,
    setIsLoading
}){
    const [teamAction, setTeamAction] = useState()

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
                        instanceButtons={instanceButtons}
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
                : null
            }
        </>
    )
}