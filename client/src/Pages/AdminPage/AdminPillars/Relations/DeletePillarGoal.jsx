import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeletePillarGoal({
    pillarId,
    goalId,
    allSustainablePillars,
    setAllSustainablePillars,
    setGoalAction
}){
    const selectedSustainablePillar = allSustainablePillars?.find(sustainablePillar => (
        sustainablePillar.pillar_id === pillarId &&
        sustainablePillar.sustainable_id === goalId
    ))

    const handleDeleteSustainableGoal = () => {
        useDelete(
            `/api/pillargoals/${selectedSustainablePillar?.id}`,
            setAllSustainablePillars,
            selectedSustainablePillar?.id,
            setGoalAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Sustainable Pillar"}
            handleInstanceSubmit={handleDeleteSustainableGoal}
            instanceName={("")}
        />
    )
}