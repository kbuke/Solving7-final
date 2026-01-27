import { useState } from "react";
import { AdminInstance } from "../../../Components/AdminInstance";
import { AdminSections } from "../../../Components/AdminSections";
import { PostPillar } from "./CRUD Actions/PostPillar";
import { DeletePillar } from "./CRUD Actions/DeletePillar";
import { useFetch } from "../../../Hooks/useFetch";
import { PatchPillar } from "./CRUD Actions/PatchPillar";
import { PillarGoals } from "./Relations/PillarGoals";

export function AdminPillars({ 
    appData, 
    isLoading,
    setIsLoading,
    openRelation,
    setOpenRelation
}) {
    const [pillarAction, setPillarAction] = useState()
    const [selectedPillarId, setSelectedPillarId] = useState()
    const [selectedPillar, setSelectedPillar] = useState()

    const allSustainablePillars = appData?.allSustainablePillars

    useFetch(`/api/pillars/${selectedPillarId}`, setSelectedPillar, [selectedPillarId, allSustainablePillars])

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
                        relational={"Pillar Goals"}
                        setSelectedRelation={setOpenRelation}
                    />
                ))}
            />

            {pillarAction === "post"
                ? <PostPillar 
                    allPillars={allPillars}
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
                    allPillars={allPillars}
                    selectedPillarId={selectedPillarId}
                    setAllPillars={setAllPillars}
                    setPillarAction={setPillarAction}
                    selectedPillar={selectedPillar}
                />
                : null
            }

            {openRelation === "Pillar Goals" && selectedPillar
                ? <PillarGoals 
                    appData={appData}
                    pillarId={selectedPillarId}
                    pillar={selectedPillar?.pillar}
                    selectedPillar={selectedPillar}
                    setGoalRelationAction={setOpenRelation}
                    setOpenRelation={setOpenRelation}
                    allSustainablePillars={allSustainablePillars}
                />
                : null
            }
        </>
    );
}
