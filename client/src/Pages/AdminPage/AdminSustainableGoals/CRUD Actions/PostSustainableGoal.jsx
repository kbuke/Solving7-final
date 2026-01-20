import { PopUp } from "../../../../Components/PopUp"
import { SustainableInputs } from "../SustainableComponents/SustainableInputs"
import { usePost } from "../../../../Hooks/usePost"

export function PostSustainableGoal({
    setAllSustainableGoals,
    setSustainableAction,
    isLoading, 
    setIsLoading
}){
    const handleSustainablePost = (formData) => {
        console.log(formData)
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
            inputArray={SustainableInputs()}
            handleInstanceSubmit={handleSustainablePost}
        />
    )
}