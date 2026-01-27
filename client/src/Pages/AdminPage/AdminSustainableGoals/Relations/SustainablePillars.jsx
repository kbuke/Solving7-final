import { useState } from "react";
import { PopUp } from "../../../../Components/PopUp";
import { PostSustainablePillar } from "./PostSustainablePillar";
import { DeleteSustainablePillar } from "./DeleteSustainablePillar";

export function SustainablePillars({
    appData,
    sustainableId,
    sustainableGoal,
    selectedSustainableGoal,
    setPillarRelationAction,
    setOpenRelation
}){
    const [pillarAction, setPillarAction] = useState()
    const [pillarId, setPillarId] = useState()

    const allPillars = appData?.allPillars

    const allSustainablePillars = appData?.allSustainablePillars
    const setAllSustainablePillars = appData?.setAllSustainablePillars

    const sustainablePillars = selectedSustainableGoal?.pillars

    return(
        <>
            <PopUp 
                type={"relational"}
                relationArray={sustainablePillars}
                relationKey={"pillar"}
                instanceName={`${sustainableGoal} Pillars`}
                setRelationalId={setPillarId}
                setCloseAction={setPillarRelationAction}
                setRelationAction={setPillarAction}
                setState={setOpenRelation}
            />

            {pillarAction === "post"
                ? <PostSustainablePillar 
                    allPillars={allPillars}
                    sustainableId={sustainableId}
                    setAllSustainablePillars={setAllSustainablePillars}
                    setPillarAction={setPillarAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                    selectedSustainableGoal={selectedSustainableGoal}
                />
                : pillarAction === "delete"
                ? <DeleteSustainablePillar 
                    pillarId={pillarId}
                    sustainableId={sustainableId}
                    allSustainablePillars={allSustainablePillars}
                    setAllSustainablePillars={setAllSustainablePillars}
                    setPillarAction={setPillarAction}
                />
                : null
            }
        </>
    )
}