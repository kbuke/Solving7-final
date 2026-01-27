import { useState } from "react";
import { PopUp } from "../../../../Components/PopUp";
import { PostPillarGoal } from "./PostPillarGoal";
import { DeletePillarGoal } from "./DeletePillarGoal";
import { EditPillarGoal } from "./EditPillarGoal";

export function PillarGoals({
    appData,
    pillarId,
    pillar,
    selectedPillar,
    setOpenRelation,
    setGoalRelationAction,
    allSustainablePillars
}) {
    const [goalAction, setGoalAction] = useState();
    const [goalId, setGoalId] = useState();

    const allGoals = appData?.allSustainableGoals;
    const setAllSustainablePillars = appData?.setAllSustainablePillars;

    const pillarGoals = selectedPillar?.sustainable_goals;
    const pillarGoalIds = pillarGoals?.map(goal => goal?.id) ?? [];

    const filteredPillarGoals = allSustainablePillars?.filter(pg =>
        pg.pillar_id === pillarId && pillarGoalIds.includes(pg.sustainable_id)
    );

    return (
        <>
            <PopUp
                type={goalAction === "edit" ? "edit" : "relational"}
                relationArray={pillarGoals}
                relationKey={"goal"}
                instanceName={`${pillar} Goal`}
                setRelationalId={setGoalId}
                setCloseAction={setGoalRelationAction}
                setRelationAction={setGoalAction}
                setState={setOpenRelation}
                additionalRelationArray={filteredPillarGoals}
                editComponent={
                    goalAction === "edit" && (
                        <EditPillarGoal
                            goalId={goalId}
                            pillarId={pillarId}
                            allSustainablePillars={allSustainablePillars}
                            setAllSustainablePillars={setAllSustainablePillars}
                            setGoalAction={setGoalAction}
                        />
                    )
                }
            />

            {goalAction === "post" && (
                <PostPillarGoal
                    allGoals={allGoals}
                    pillarId={pillarId}
                    setAllSustainablePillars={setAllSustainablePillars}
                    setGoalAction={setGoalAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                    selectedPillar={selectedPillar}
                />
            )}

            {goalAction === "delete" && (
                <DeletePillarGoal
                    pillarId={pillarId}
                    goalId={goalId}
                    allSustainablePillars={allSustainablePillars}
                    setAllSustainablePillars={setAllSustainablePillars}
                    setGoalAction={setGoalAction}
                />
            )}
        </>
    );
}

