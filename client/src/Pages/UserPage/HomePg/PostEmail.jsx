import { useForm } from "react-hook-form";
import { PostInstance } from "../../../Components/PostInstance";
import { usePost } from "../../../Hooks/usePost";
import { EmailInputs } from "./EmailInputs";
import { TextInput } from "../../../Components/TextInput";
import { useState } from "react";
import { LoadingIcon } from "../../../Components/LoadingIcon";

export function PostEmail({
    appData
}){
    const [emailSent, setEmailSent] = useState(false)
    const [sendingEmail, setSendingEmail] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        formState: {errors}
    } = useForm()

    const setAllEmails = appData?.setAllEmails

    const handleEmailPost = (formData) => {
        console.log("posting")
        usePost({
            url: "/api/emails",
            body: formData,
            credentials: "include",
            setLoading: setSendingEmail,
            onSuccess: (newEmail) => {
                setAllEmails(prev => [...prev, newEmail])
                setSendingEmail(false)
                setEmailSent(true)
            }
        })
    }

    return(
        <form 
            onSubmit={handleSubmit(handleEmailPost)}
            className="mt-4 flex flex-col lg:rounded-2xl lg:p-8 lg:bg-linear-to-br from-green-500 to-green-600"
        >
            <h1 className="home-section-header text-center text-white">
                Send Email
            </h1>



            {emailSent 
            ? <div className="bg-green-200 p-4 rounded-2xl text-center uppercase">
                Thank you for your email, we'll get back to you ASAP.
            </div>
            : <>
                {sendingEmail 
                    ?<LoadingIcon />
                    :<TextInput 
                        inputArray={EmailInputs()}
                        errors={errors}
                        register={register}
                        control={control}
                    />
                }

                <button
                    className="submit-button self-center justify-self-center lg:border lg:hover:-translate-y-2"
                >
                    Send Email
                </button>
            </>
            }
        </form>
    )
}