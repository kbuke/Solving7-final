import { useOutletContext } from "react-router";
import { PostEmail } from "./Components/PostEmail";
import { SocialMedia } from "./Components/SocialMedia";

export function ContactPage(){
    const appData = useOutletContext()

    const allEmails = appData?.allEmails
    const setAllEmails = appData?.setAllEmails
    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading
    const register = appData?.register
    const handleSubmit = appData?.handleSubmit
    const errors = appData?.errors

    return(
        <div className="grid grid-cols-[3.5fr_6.5fr] w-scren p-20">
            <SocialMedia />

            <PostEmail 
                allEmails={allEmails}
                setAllEmails={setAllEmails}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
            />
        </div>
    )
}