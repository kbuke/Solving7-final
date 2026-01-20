import { useState } from "react";
import { AdminSections } from "../../../Components/AdminSections";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostSustainableGoal } from "./CRUD Actions/PostSustainableGoal";
import { DeleteSustainableGoal } from "./CRUD Actions/DeleteSustainableGoal";
import { PatchSustainableGoal } from "./CRUD Actions/PatchSustainableGoal";

export function AdminSustainableGoals({
    appData
}){
    const [sustainableAction, setSustainableAction] = useState()
    const [sustainableId, setSustainableId] = useState()
    const [selectedSustainableGoal, setSelectedSustainableGoal] = useState()

    useFetch(`/api/sustainabilitygoals/${sustainableId}`, setSelectedSustainableGoal, [sustainableId])

    const allSustainableGoals = appData?.allSustainableGoals
    const setAllSustainableGoals = appData?.setAllSustainableGoals

    const currentGoals = allSustainableGoals.length
    const noOfGoals = 17

    console.log(allSustainableGoals)

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
                    />
                ))}
            />

            {sustainableAction === "post"
                ? <PostSustainableGoal 
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
                />
                : null
            }
        </>
    )
}