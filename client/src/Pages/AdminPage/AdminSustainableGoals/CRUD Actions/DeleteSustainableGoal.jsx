import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteSustainableGoal({
    sustainableId,
    setAllSustainableGoals,
    setSustainableAction,
    selectedSustainableGoal
}){
    const handleDeleteGoal = () => {
        useDelete(
            `/api/sustainabilitygoals/${sustainableId}`,
            setAllSustainableGoals,
            sustainableId,
            setSustainableAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Sustainable Goal"}
            handleInstanceSubmit={handleDeleteGoal}
            instanceName={selectedSustainableGoal?.goal}
        />
    )
}