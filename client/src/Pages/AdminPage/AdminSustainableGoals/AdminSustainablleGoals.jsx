import { useState } from "react";
import { AdminSections } from "../../../Components/AdminSections";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostSustainableGoal } from "./CRUD Actions/PostSustainableGoal";

export function AdminSustainableGoals({
    appData
}){
    const [sustainableAction, setSustainableAction] = useState()
    const [sustainableId, setSustainableId] = useState()
    const [selectedSustainableGoal, setSelectedSustainableGoal] = useState()

    useFetch(`/api/sustainabilitygoals/${sustainableId}`, setSelectedSustainableGoal, [sustainableId])

    const allSustainableGoals = appData?.allSustainableGoals
    const setAllSustainableGoals = appData?.setAllSustainableGoals

    console.log(setAllSustainableGoals)
    console.log(sustainableAction)
    return(
        <>
            <AdminSections 
                bgColour="green"
                sectionTitle={"Sustainable Goals"}
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
                : null
            }
        </>
    )
}