import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import { PillarInputs } from "../PillarComponent/PillarInputs"

export function PostPillar({
    setAllPillars,
    setPillarAction,
    isLoading,
    setIsLoading
}){

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
            type={"post"}
            instanceType={"Pillar"}
            inputArray={PillarInputs()}
            handleInstanceSubmit={handlePillarPost}
        />
    )
}