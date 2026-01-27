import { useState } from "react"
import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import { RequiredInput } from "../../../../Components/RequiredInput"

export function PostPillarGoal({
    allGoals,
    pillarId,
    setAllSustainablePillars,
    setGoalAction,
    isLoading,
    setIsLoading,
    selectedPillar
}){
    const [successfulSustainableGoalPost, setSuccessfulSustainableGoalPost] = useState()

    const definedGoals = selectedPillar?.sustainable_goals


    const selectedPillarIds = new Set(
        definedGoals?.map(goal => goal.id)
    )

    const goalOptions = allGoals?.filter(goal => (
        !selectedPillarIds?.has(goal?.id)
    )).map(goal => ({
        label: goal.goal,
        value: goal.id
    }))

    const newPillarInput = [
        {
            type: "select",
            label: "Please select goal",
            name: "selectedGoal",
            options: goalOptions,
            validation: {
                required: "Please select a Goal"
            }
        },

        {
            type: "textarea",
            label: "Please add relation info",
            placeholder: "Please add relation info",
            name: "sustainablePillarRelationship",
            validation: RequiredInput("Sustainable, Pillar Relationship")
        }
    ]

    const handlePillarPost = (formData) => {
        const payload = {
            sustainableId: formData.selectedGoal.value,
            pillarId: pillarId,
            sustainablePillarRelationship: formData.sustainablePillarRelationship
        }

        usePost({
            url: "/api/pillargoals",
            body: payload,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newSustainablePillar) => {
                setAllSustainablePillars(prev => [...prev, newSustainablePillar])
                setGoalAction(null)
            },
            setEndActionState: setGoalAction
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Sustainable Pillar"}
            inputArray={newPillarInput}
            handleInstanceSubmit={handlePillarPost}
            setState={setGoalAction}
            success={successfulSustainableGoalPost}
            setSuccess={setSuccessfulSustainableGoalPost}
        />
    )
}