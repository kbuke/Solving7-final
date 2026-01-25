import { useState } from "react";
import { usePost } from "../../../../Hooks/usePost";
import { PopUp } from "../../../../Components/PopUp";
import { PgSectionInput } from "../PgSectionComponent/PgSectionInputs";

export function PostPgSection({
    allPgSections,
    setAllPgSections,
    setPgSectionAction,
    isLoading,
    setIsLoading
}){
    const [successfulPgSectionPost, setSuccessfulPgSectionPost] = useState()

    const handlePgSectionPost = (formData) => {
        console.log(formData)
        usePost({
            url: "/api/pgsections",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newPgSection) => {
                console.log("hello")
                setAllPgSections(prev => [...prev, newPgSection])
            }
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Pg Section"}
            inputArray={PgSectionInput({allPgSections})}
            handleInstanceSubmit={handlePgSectionPost}
            setState={setPgSectionAction}
            success={successfulPgSectionPost}
            setSuccess={setSuccessfulPgSectionPost}
        />
    )
}