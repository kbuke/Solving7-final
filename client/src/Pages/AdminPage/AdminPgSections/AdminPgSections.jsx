import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminSections } from "../../../Components/AdminSections";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostPgSection } from "./CRUD Actions/PostPgSection";
import { PatchPgSection } from "./CRUD Actions/PatchPgSection";
import { DeletePgSection } from "./CRUD Actions/DeletePgSection";

export function AdminPgSections({
    appData
}){
    const [pgSectionAction, setPgSectionAction] = useState()
    const [selectedPgSectionId, setSelectedPgSectionId] = useState()
    const [selectedPgSection, setSelectedPgSection] = useState()

    useFetch(`/api/pgsections/${selectedPgSectionId}`, setSelectedPgSection, [selectedPgSectionId])

    const allPgSections = appData?.allPgSections
    const setAllPgSections = appData?.setAllPgSections


    return(
        <>
            <AdminSections 
                bgColour={"white"}
                sectionTitle={"Pg Section"}
                setInstanceAction={setPgSectionAction}
                table={allPgSections.map((page, index) => (
                    <AdminInstance 
                        key={page?.id}
                        index={index}
                        total={allPgSections.length}
                        title={"Page Sections: "}
                        hiddenValue={page.page} 
                        setInstanceAction={setPgSectionAction}
                        setSelectedId={setSelectedPgSectionId}
                        chosenId={page?.id}
                        fields={[
                            {
                                label: "Page Text",
                                type: "text",
                                value: page?.text
                            }
                        ]}
                    />
                ))}
            />

            {pgSectionAction === "post"
                ? <PostPgSection 
                    allPgSections={allPgSections}
                    setAllPgSections={setAllPgSections}
                    setPgSectionAction={setPgSectionAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                />
                : pgSectionAction === "patch"
                ? <PatchPgSection 
                    allPgSections={allPgSections}
                    selectedPgSectionId={selectedPgSectionId}
                    setAllPgSections={setAllPgSections}
                    setPgSectionAction={setPgSectionAction}
                    selectedPgSection={selectedPgSection}
                />
                : pgSectionAction === "delete"
                ? <DeletePgSection 
                    selectedPgSectionId={selectedPgSectionId}
                    setAllPgSections={setAllPgSections}
                    setPgSectionAction={setPgSectionAction}
                    selectedPgSection={selectedPgSection}
                />
                : null
            }
        </>
    )
}