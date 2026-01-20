import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminSections } from "../../../Components/AdminSections";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostTeamMember } from "./CRUD Actions/PostTeamMember";
import { DeleteTeamMember } from "./CRUD Actions/DeleteTeamMember";
import { PatchTeamMember } from "./CRUD Actions/PatchTeamMember";
import { MemberTeams } from "./Relations/MemberTeams";

export function AdminTeamMembers({
    appData,
    openRelation,
    setOpenRelation
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
                bgColour={"white"}
                sectionTitle={"Team Members"}
                setInstanceAction={setTeamMemberAction}
                table={allTeamMembers?.map((member, index) => {
                    return(
                        <AdminInstance 
                            key={member?.id}
                            index={index}
                            total={allTeamMembers.length}
                            title={"Member Name: "}
                            hiddenValue={member?.name}
                            setInstanceAction={setTeamMemberAction}
                            setSelectedId={setSelectedTeamMemberId}
                            chosenId={member?.id}
                            fields={[
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
                            relational={"Members Teams"}
                            setSelectedRelation={setOpenRelation}
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

            {openRelation === "Members Teams" && selectedTeamMember
                ? <MemberTeams 
                    appData={appData}
                    selectedTeamMemberId={selectedTeamMemberId}
                    setSelectedTeamMemberId={setSelectedTeamMemberId}
                    memberName={selectedTeamMember?.name}
                    selectedTeamMember={selectedTeamMember}
                />
                : null
            }
        </>
    )
}