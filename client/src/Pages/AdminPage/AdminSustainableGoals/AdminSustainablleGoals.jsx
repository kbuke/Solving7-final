import { useState } from "react";
import { AdminSections } from "../../../Components/AdminSections";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostSustainableGoal } from "./CRUD Actions/PostSustainableGoal";
import { DeleteSustainableGoal } from "./CRUD Actions/DeleteSustainableGoal";
import { PatchSustainableGoal } from "./CRUD Actions/PatchSustainableGoal";
import { SustainablePillars } from "./Relations/SustainablePillars";

export function AdminSustainableGoals({
    appData,
    openRelation,
    setOpenRelation
}){
    const [sustainableAction, setSustainableAction] = useState()
    const [sustainableId, setSustainableId] = useState()
    const [selectedSustainableGoal, setSelectedSustainableGoal] = useState()

    const allSustainableGoals = appData?.allSustainableGoals
    const setAllSustainableGoals = appData?.setAllSustainableGoals

    useFetch(`/api/sustainabilitygoals/${sustainableId}`, setSelectedSustainableGoal, [sustainableId, allSustainableGoals])

    const currentGoals = allSustainableGoals.length
    const noOfGoals = 17

    return(
        <>
            <AdminSections 
                bgColour="green"
                sectionTitle={"Sustainable Goals"}
                currentInstances={currentGoals}
                maxInstances={noOfGoals}
                setInstanceAction={setSustainableAction}
                table={allSustainableGoals?.map((sustainable, index) => (
                    <AdminInstance 
                        key={sustainable?.id}
                        index={index}
                        total={allSustainableGoals.length}
                        title = "UN Goal"
                        hiddenValue={sustainable.goal}
                        setInstanceAction={setSustainableAction}
                        setSelectedId={setSustainableId}
                        chosenId={sustainable?.id}
                        fields={[
                            {
                                label: "Goal Info",
                                type: "text",
                                value: sustainable?.info
                            }
                        ]}
                        relational={"Sustainable Pillars"}
                        setSelectedRelation={setOpenRelation}
                    />
                ))}
            />

            {sustainableAction === "post"
                ? <PostSustainableGoal 
                    allSustainableGoals={allSustainableGoals}
                    setAllSustainableGoals={setAllSustainableGoals}
                    setSustainableAction={setSustainableAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                />
                : sustainableAction === "delete"
                ? <DeleteSustainableGoal 
                    sustainableId={sustainableId}
                    setAllSustainableGoals={setAllSustainableGoals}
                    setSustainableAction={setSustainableAction}
                    selectedSustainableGoal={selectedSustainableGoal}
                />
                : sustainableAction === "patch"
                ? <PatchSustainableGoal 
                    sustainableId={sustainableId}
                    setAllSustainableGoals={setAllSustainableGoals}
                    setSustainableAction={setSustainableAction}
                    selectedSustainableGoal={selectedSustainableGoal}
                    sustainableAction={sustainableAction}
                />
                : null
            }

            {openRelation === "Sustainable Pillars" && selectedSustainableGoal
                ? <SustainablePillars 
                    appData={appData}
                    sustainableId={sustainableId}
                    sustainableGoal={selectedSustainableGoal?.goal}
                    selectedSustainableGoal={selectedSustainableGoal}
                    setPillarRelationAction={setOpenRelation}
                    setOpenRelation={setOpenRelation}
                />
                : null
            } 
        </>
    )
}