import { PopUp } from "../../../../Components/PopUp"
import {usePatch} from "../../../../Hooks/usePatch"
import { PillarInputs } from "../PillarComponent/PillarInputs"

export function PatchPillar({
    allPillars,
    selectedPillarId,
    setAllPillars,
    setPillarAction,
    selectedPillar
}){
    // Define object for patch to reset values to their existing (pre-patch)
    const patchPillarObject = [
        {
            key: "pillar",
            accessor: "pillar"
        },

        {
            key: "pillarIntro",
            accessor: "intro"
        },

        {
            key: "pillarImg",
            accessor: "img"
        }
    ]

    const handlePillarEdit = (formData) => {
        const patchData = {
            pillar: formData.pillar,
            pillarIntro: formData.pillarIntro,
            pillarImg: formData.pillarImg
        }

        usePatch(
            patchData, `/api/pillars/${selectedPillarId}`,
            selectedPillarId, setAllPillars, setPillarAction
        )
    }

    return(
        <PopUp 
            type={"patch"}
            instanceType={"Pillar"}
            instanceName={selectedPillar?.pillar}
            patchReset = {patchPillarObject}
            selectedInstance={selectedPillar}
            inputArray={PillarInputs({
                allPillars: allPillars,
                currentId: selectedPillarId
            })}
            handleInstanceSubmit={handlePillarEdit}
            setState={setPillarAction}
        />
    )
}