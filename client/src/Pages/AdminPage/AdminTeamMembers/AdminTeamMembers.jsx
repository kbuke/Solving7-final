import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminSections } from "../../../Components/AdminSections";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostTeamMember } from "./CRUD Actions/PostTeamMember";
import { DeleteTeamMember } from "./CRUD Actions/DeleteTeamMember";

export function AdminTeamMembers({
    appData,
    instanceButtons
}){
    const [teamMemberAction, setTeamMemberAction] = useState()
    const [selectedTeamMember, setSelectedTeamMember] = useState()
    const [selectedTeamMemberId, setSelectedTeamMemberId] = useState()

    const allTeamMembers = appData?.allTeamMembers
    const setAllTeamMembers = appData?.setAllTeamMembers

    useFetch(`api/members/${selectedTeamMemberId}`, setSelectedTeamMember, [selectedTeamMemberId])

    return(
        <>
            <AdminSections 
                bgColour={"bg-white"}
                sectionTitle={"Team Members"}
                setInstanceAction={setTeamMemberAction}
                table={allTeamMembers?.map((member) => {
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
                : null
            }
        </>
    )
}