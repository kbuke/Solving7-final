import { useState } from "react";
import { AdminInstance } from "../../../Components/AdminInstance";
import { AdminSections } from "../../../Components/AdminSections";
import { PostPillar } from "./CRUD Actions/PostPillar";
import { DeletePillar } from "./CRUD Actions/DeletePillar";
import { useFetch } from "../../../Hooks/useFetch";
import { PatchPillar } from "./CRUD Actions/PatchPillar";

export function AdminPillars({ 
    appData, 
    isLoading,
    setIsLoading
}) {
    const [pillarAction, setPillarAction] = useState()
    const [selectedPillarId, setSelectedPillarId] = useState()
    const [selectedPillar, setSelectedPillar] = useState()

    useFetch(`/api/pillars/${selectedPillarId}`, setSelectedPillar, [selectedPillarId])

    const allPillars = appData?.allPillars;
    const setAllPillars = appData?.setAllPillars

    const currentPillars = allPillars.length

    const noOfPillarsAllowed = 7

    return (
        <>
            <AdminSections
                bgColour="green"
                sectionTitle="Pillars"
                currentInstances={currentPillars}
                maxInstances={noOfPillarsAllowed}
                setInstanceAction={setPillarAction}
                table={allPillars?.map((pillar, index) => (
                    <AdminInstance
                        key={pillar.id}
                        index={index}
                        total={allPillars.length}
                        title="Pillar Name:"
                        hiddenValue={pillar.pillar}
                        instanceImg={pillar.img}
                        setInstanceAction={setPillarAction}
                        setSelectedId={setSelectedPillarId}
                        chosenId={pillar?.id}
                        fields={[
                            {
                                label: "Pillar Intro:",
                                type: "text",
                                value: pillar.intro,
                            }
                        ]}
                    />
                ))}
            />

            {pillarAction === "post"
                ? <PostPillar 
                    setAllPillars={setAllPillars}
                    setPillarAction={setPillarAction}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                : pillarAction === "delete"
                ? <DeletePillar 
                    selectedPillarId={selectedPillarId}
                    setAllPillars={setAllPillars}
                    setPillarAction={setPillarAction}
                    selectedPillar={selectedPillar}
                />
                : pillarAction === "patch"
                ? <PatchPillar 
                    selectedPillarId={selectedPillarId}
                    setAllPillars={setAllPillars}
                    setPillarAction={setPillarAction}
                    selectedPillar={selectedPillar}
                />
                : null
            }
        </>
    );
}
