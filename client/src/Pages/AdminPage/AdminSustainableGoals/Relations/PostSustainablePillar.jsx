import { useState } from "react"
import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"

export function PostSustainablePillar({
    allPillars,
    sustainableId,
    setAllSustainablePillars,
    setPillarAction,
    isLoading,
    setIsLoading,
    selectedSustainableGoal
}){
    const [successfulSustainableGoalPost, setSuccessfulSustainableGoalPost] = useState()

    const definedPillars = selectedSustainableGoal?.pillars

    const selectedPillarIds = new Set(
        definedPillars?.map(pillar => pillar.id)
    )

    const pillarOptions = allPillars?.filter(pillar => (
        !selectedPillarIds?.has(pillar?.id)
    )).map(pillar => ({
        label: pillar.pillar,
        value: pillar.id
    }))

    const newPillarInput = [
        {
            type: "select",
            label: "Please select pillar",
            name: "selectedPillar",
            options: pillarOptions,
            validation: {
                required: "Please select a pillar"
            }
        }
    ]

    const handlePillarPost = (formData) => {
        const payload = {
            sustainableId: sustainableId,
            pillarId: formData.selectedPillar.value
        }

        usePost({
            url: "/api/pillargoals",
            body: payload,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newSustainablePillar) => {
                setAllSustainablePillars(prev => [...prev, newSustainablePillar])
                setPillarAction(null)
            },
            setEndActionState: setPillarAction
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Sustainable Pillar"}
            inputArray={newPillarInput}
            handleInstanceSubmit={handlePillarPost}
            setState={setPillarAction}
            success={successfulSustainableGoalPost}
            setSuccess={setSuccessfulSustainableGoalPost}
        />
    )
}