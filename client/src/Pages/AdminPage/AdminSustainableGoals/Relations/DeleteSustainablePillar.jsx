import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteSustainablePillar({
    pillarId,
    sustainableId,
    allSustainablePillars,
    setAllSustainablePillars,
    setPillarAction
}){
    const selectedSustainablePillar = allSustainablePillars?.find(sustainablePillar => (
        sustainablePillar.pillar_id === pillarId &&
        sustainablePillar.sustainable_id === sustainableId
    ))

    const handleDeleteSustainableGoal = () => {
        useDelete(
            `/api/pillargoals/${selectedSustainablePillar?.id}`,
            setAllSustainablePillars,
            selectedSustainablePillar?.id,
            setPillarAction
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