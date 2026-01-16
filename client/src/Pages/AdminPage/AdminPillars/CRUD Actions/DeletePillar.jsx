import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeletePillar({
    selectedPillarId,
    setAllPillars,
    setPillarAction,
    selectedPillar,
}){

    const handleDeletePillar = () => {
        useDelete(
            `/api/pillars/${selectedPillarId}`,
            setAllPillars,
            selectedPillarId,
            setPillarAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Pillar"}
            handleInstanceSubmit={handleDeletePillar}
            instanceName={selectedPillar?.pillar}
        />
    )
}