import { TextContainers } from "../../Components/TextContainers"
import { usePost } from "../../Hooks/usePost"
import { useState } from "react"

export function PostEmail({
    allEmails,
    setAllEmails,
    isLoading,
    setIsLoading,
    register,
    handleSubmit,
    errors
}){
    const [emailError, setEmailError] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    const handleNewEmail = (formData) => {
        usePost(
            "/api/emails",
            formData,
            allEmails,
            setAllEmails,
            setIsLoading,
            setEmailError,
            setEmailSent
        )
    }

    const emailAarray = [
        {
            label: "Please enter email subject:",
            type: "text",
            name: "emailSubject",
            validation: {
                required: "Please enter email subject"
            }
        },
        {
            label: "Please enter your email address:",
            type: "text",
            name: "senderEmail",
            validation: {
                required: "Please enter your email address",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                }
            }
        },
        {
            label: "Please enter your message",
            type: "textarea",
            name: "emailMessage",
            validation: {
                required: "Please enter your message"
            }
        }
    ]

    return(
        <TextContainers 
            purpose="Send Email"
            textArray={emailAarray}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={handleNewEmail}
            isLoading={isLoading}
            error={emailError}
            errorText="Failed to send email"
            completed={emailSent}
            completedText={"Email Sent"}
        />
    )
}