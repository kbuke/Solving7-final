import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminSections } from "../../../Components/AdminSections";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostTeamMember } from "./CRUD Actions/PostTeamMember";
import { DeleteTeamMember } from "./CRUD Actions/DeleteTeamMember";
import { PostMemberTeam } from "./Relations/PostMemberTeam";
import { DeleteMemberTeam } from "./Relations/DeleteMemberTeam";
import { PatchTeamMember } from "./CRUD Actions/PatchTeamMember";

export function AdminTeamMembers({
    appData,
    instanceButtons
}){
    const [teamMemberAction, setTeamMemberAction] = useState()
    const [selectedTeamMember, setSelectedTeamMember] = useState()
    const [selectedTeamMemberId, setSelectedTeamMemberId] = useState()

    const [memberTeamsAction, setMemberTeamsAction] = useState()
    const [teamId, setTeamId] = useState()

    const allTeamMembers = appData?.allTeamMembers
    const setAllTeamMembers = appData?.setAllTeamMembers
    const allTeams = appData?.allTeams
    const allMemberTeams = appData?.allMemberTeams
    const setAllMemberTeams = appData?.setAllMemberTeams

    console.log(teamMemberAction)

    useFetch(`api/members/${selectedTeamMemberId}`, setSelectedTeamMember, [selectedTeamMemberId])

    return(
        <>
            <AdminSections 
                bgColour={"bg-white"}
                sectionTitle={"Team Members"}
                setInstanceAction={setTeamMemberAction}
                table={allTeamMembers?.map((member) => {
                    const membersTeams = member?.teams
                    return(
                        <AdminInstance 
                            key={member?.id}
                            id={member?.id}
                            title={"Member Name: "}
                            hiddenValue={member?.name}
                            setInstanceAction={setTeamMemberAction}
                            setSelectedId={setSelectedTeamMemberId}
                            chosenId={member?.id}
                            fields={[
                                {
                                    label: "Member Image: ",
                                    type: "img",
                                    value: member?.img
                                },

                                {
                                    label: "Member Intro:",
                                    type: "text",
                                    value: member?.intro
                                },

                                {
                                    label: "Email: ",
                                    type: "text",
                                    value: member?.email
                                }
                            ]}
                            relational={"Members' Teams"}
                            relationalArray={membersTeams}
                            relationalKey={"name"}
                            setRelationAction={setMemberTeamsAction}
                            setRelationalId={setTeamId}
                        />
                    )
                })}
            />

            {teamMemberAction === "post"
                ? <PostTeamMember 
                    setAllTeamMembers={setAllTeamMembers}
                    setTeamMemberAction={setTeamMemberAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                />
                : teamMemberAction === "delete"
                ? <DeleteTeamMember 
                    selectedTeamMemberId={selectedTeamMemberId}
                    setAllTeamMembers={setAllTeamMembers}
                    setTeamMemberAction={setTeamMemberAction}
                    selectedTeamMember={selectedTeamMember}
                />
                : teamMemberAction === "patch"
                ? <PatchTeamMember 
                    selectedMemberId={selectedTeamMemberId}
                    setAllMembers={setAllTeamMembers}
                    setMemberAction={setTeamMemberAction}
                    selectedMember={selectedTeamMember}
                />
                : null
            }

            {memberTeamsAction === "post"
                ? <PostMemberTeam 
                    allTeams={allTeams}
                    selectedMemberId={selectedTeamMemberId}
                    setAllMemberTeams={setAllMemberTeams}
                    setMemberTeamsAction={setMemberTeamsAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                />
                : memberTeamsAction === "delete"
                ? <DeleteMemberTeam 
                    teamId={teamId}
                    memberId={selectedTeamMemberId}
                    allMemberTeams={allMemberTeams}
                    setAllMemberTeams={setAllMemberTeams}
                    setMemberTeamAction={setMemberTeamsAction}
                />
                : null
            }
        </>
    )
}