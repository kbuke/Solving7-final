import { useState } from "react";
import { usePost } from "../../../../Hooks/usePost";
import { PopUp } from "../../../../Components/PopUp";
import { HomeSectionInputs } from "../HomeSectionComponent/HomeSectionInputs";

export function PostHomeSection({
    allHomeSections,
    setAllHomeSections,
    setHomeSectionAction,
    isLoading,
    setIsLoading
}){
    const [successfulHomeSectionPost, setSuccessfulHomeSectionPost] = useState()

    const handleHomeSectionPost = (formData) => {
        usePost({
            url: "/api/homesections",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newHomeSection) => {
                setAllHomeSections(prev => [...prev, newHomeSection])
                // setHomeSectionAction(null)
            }
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Home Section"}
            inputArray={HomeSectionInputs({allHomeSections})}
            handleInstanceSubmit={handleHomeSectionPost}
            setState={setHomeSectionAction}
            success={successfulHomeSectionPost}
            setSuccess={setSuccessfulHomeSectionPost}
        />
    )
}