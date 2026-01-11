import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"

export function PostPillar({
    setAllPillars,
    setPillarAction,
    isLoading,
    setIsLoading
}){

    const newPillarInputs = [
        {
            type: "text",
            placeholder: "Please enter pillar goal",
            className: "text-input-container",
            name: "pillar",
            validation: {
                required: "Please enter the pillar title."
            }
        },

        {
            type: "textarea",
            placeholder: "Please enter pillars information",
            className: "pillar-text-area",
            name: "pillarIntro",
            validation: {
                required: "Please enter pillar intro"
            }
        },

        {
            type: "text",
            placeholder: "Please enter image link for pillar",
            className: "text-input-container",
            name: "pillarImg",
            validation: {
                required: "Please enter image for pillar"
            }
        }
    ]

    const handlePillarPost = (formData) => {
        usePost({
            url: "/api/pillars",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newPillar) => {
                setAllPillars(prev => [...prev, newPillar])
                setPillarAction(null)
            },
            setEndActionState: setPillarAction
        })
    }

    return(
        <PopUp 
            instanceType={"Pillar"}
            inputArray={newPillarInputs}
            handleInstanceSubmit={handlePillarPost}
        />
    )
}