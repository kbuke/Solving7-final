import { useState } from "react";
import { PopUp } from "../../../../Components/PopUp";
import { PostSustainablePillar } from "./PostSustainablePillar";

export function SustainablePillars({
    appData,
    sustainableId,
    sustainableGoal,
    selectedSustainableGoal
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
                setRelationAction={setPillarAction}
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
                : null
            }
        </>
    )
}