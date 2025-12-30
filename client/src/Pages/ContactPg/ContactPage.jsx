import { useOutletContext } from "react-router";
import { PostEmail } from "./Components/PostEmail";
import { SocialMedia } from "./Components/SocialMedia";

export function ContactPage(){
    const appData = useOutletContext()

    const allEmails = appData?.allEmails
    const setAllEmails = appData?.setAllEmails

    const allSocials = appData?.allSocials
    const setAllSocials = appData?.setAllSocials

    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading
    const register = appData?.register
    const handleSubmit = appData?.handleSubmit
    const errors = appData?.errors

    return(
        <div className="
            flex flex-col
            w-screen
            p-6

            lg:grid
            lg:grid-cols-[3.5fr_6.5fr]
            lg:p-20
        ">
            <SocialMedia 
                allSocials={allSocials}
                setAllSocials={setAllSocials}
            />

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