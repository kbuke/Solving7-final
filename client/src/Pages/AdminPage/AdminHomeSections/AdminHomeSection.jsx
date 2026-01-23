import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminSections } from "../../../Components/AdminSections";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostHomeSection } from "./CRUD Actions/PostHomeSection";
import { PatchHomeSection } from "./CRUD Actions/PatchHomeSection";

export function AdminHomeSections({
    appData
}){
    const [homeSectionAction, setHomeSectionAction] = useState()
    const [selectedHomeSectionId, setSelectedHomeSectionId] = useState()
    const [selectedHomeSection, setSelectedHomeSection] = useState()

    useFetch(`/api/homesections/${selectedHomeSectionId}`, setSelectedHomeSection, [selectedHomeSectionId])

    const allHomeSections = appData?.allHomeSections
    const setAllHomeSections = appData?.setAllHomeSections

    return(
        <>
            <AdminSections 
                bgColour={"green"}
                sectionTitle={"Home Section"}
                setInstanceAction={setHomeSectionAction}
                table={allHomeSections.map((section, index) => (
                    <AdminInstance 
                        key={section?.id}
                        index={index}
                        total={allHomeSections.length}
                        title={"Home Section: "}
                        hiddenValue={section.section}
                        setInstanceAction={setHomeSectionAction}
                        setSelectedId={setSelectedHomeSectionId}
                        chosenId={section?.id}
                        fields={[
                            {
                                label: "Section info",
                                type: "text",
                                value: section?.info
                            }
                        ]}
                    />
                ))}
            />

            {homeSectionAction === "post"
                ? <PostHomeSection 
                    allHomeSections={allHomeSections}
                    setAllHomeSections={setAllHomeSections}
                    setHomeSectionAction={setHomeSectionAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                />
                : homeSectionAction === "patch"
                ? <PatchHomeSection 
                    allHomeSections={allHomeSections}
                    selectedHomeSectionId={selectedHomeSectionId}
                    setAllHomeSections={setAllHomeSections}
                    setHomeSectionAction={setHomeSectionAction}
                    selectedHomeSection={selectedHomeSection}
                />
                : null
            }
        </>
    )
}