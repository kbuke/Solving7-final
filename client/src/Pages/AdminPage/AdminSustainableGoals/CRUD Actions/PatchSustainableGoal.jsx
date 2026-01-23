import { PopUp } from "../../../../Components/PopUp"
import { usePatch } from "../../../../Hooks/usePatch"
import { SustainableInputs } from "../SustainableComponents/SustainableInputs"

export function PatchSustainableGoal({
    allSustainableGoals,
    sustainableId,
    setAllSustainableGoals,
    setSustainableAction,
    selectedSustainableGoal
}){
    const patchSustainableObject = [
        {
            key: "unGoal",
            accessor: "goal"
        },

        {
            key: "unGoalInfo",
            accessor: "info"
        }
    ]

    const handleGoalPatch = (formData) => {
        const patchData = {
            unGoal: formData.unGoal,
            unGoalInfo: formData.unGoalInfo
        }

        usePatch(
            patchData, `/api/sustainabilitygoals/${sustainableId}`,
            sustainableId, setAllSustainableGoals, setSustainableAction
        )
    }

    return(
        <PopUp 
            type={"patch"}
            instanceType={"Sustainable Goal"}
            instanceName={selectedSustainableGoal?.goal}
            patchReset={patchSustainableObject}
            selectedInstance={selectedSustainableGoal}
            inputArray={SustainableInputs({
                allSustainableGoals: allSustainableGoals,
                currentId: sustainableId
            })}
            handleInstanceSubmit={handleGoalPatch}
            setState={setSustainableAction}
        />
    )
}