import { PopUp } from "../../../../Components/PopUp"
import { SustainableInputs } from "../SustainableComponents/SustainableInputs"
import { usePost } from "../../../../Hooks/usePost"
import { useState } from "react"

export function PostSustainableGoal({
    allSustainableGoals,
    setAllSustainableGoals,
    setSustainableAction,
    isLoading, 
    setIsLoading
}){
    const [sustainableGoalSuccess, setSustainableGoalSuccess] = useState()

    const handleSustainablePost = (formData) => {
        usePost({
            url: "/api/sustainabilitygoals",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newGoal) => {
                setAllSustainableGoals(prev => [...prev, newGoal])
                setSustainableAction(null)
            },
            setEndActionState: setSustainableAction
        })
    }

    return(
        <PopUp 
            type="post"
            instanceType={"Sustainability"}
            inputArray={SustainableInputs({allSustainableGoals})}
            handleInstanceSubmit={handleSustainablePost}
            setState={setSustainableAction}
            success={sustainableGoalSuccess}
            setSuccess={setSustainableGoalSuccess}
        />
    )
}