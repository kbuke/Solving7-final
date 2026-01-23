import { useState } from "react"
import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import { PillarInputs } from "../PillarComponent/PillarInputs"

export function PostPillar({
    allPillars,
    setAllPillars,
    setPillarAction,
    isLoading,
    setIsLoading
}){
    const [successfulPillarPost, setSuccessfulPillarPost] = useState()

    const handlePillarPost = (formData) => {
        usePost({
            url: "/api/pillars",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newPillar) => {
                setAllPillars(prev => [...prev, newPillar])
                setSuccessfulPillarPost(true)
            }
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Pillar"}
            inputArray={PillarInputs({allPillars})}
            handleInstanceSubmit={handlePillarPost}
            setState={setPillarAction}
            success={successfulPillarPost}
            setSuccess={setSuccessfulPillarPost}
        />
    )
}