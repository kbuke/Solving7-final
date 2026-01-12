import { useState } from "react"
import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"
import {useFetch} from "../../../../Hooks/useFetch"

export function DeletePillar({
    pillarId,
    selectedPillarId,
    setAllPillars,
    setPillarAction
}){
    const [selectedPillar, setSelectedPillar] = useState()

    useFetch(`/api/pillars/${pillarId}`, setSelectedPillar, [pillarId])

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