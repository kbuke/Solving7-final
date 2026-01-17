import { PostInstance } from "../../../Components/PostInstance";
import { usePost } from "../../../Hooks/usePost";
import { EmailInputs } from "./EmailInputs";

export function PostEmail({
    appData
}){
    const setIsLoading = appData?.setIsLoading
    const setAllEmails = appData?.setAllEmails

    const handleEmailPost = (formData) => {
        console.log("posting")
        usePost({
            url: "/api/emails",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newEmail) => {
                setAllEmails(prev => [...prev, newEmail])
                console.log("sent")
            }
        })
    }
    return(
        <div>
            <h1>Send Email</h1>
            <PostInstance 
                instanceType="Email"
                inputArray={EmailInputs()}
                handleInstanceSubmit={handleEmailPost}
            />
        </div>
    )
}