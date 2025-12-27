import { useState } from "react"
import { TextContainers } from "./Components/TextContainers"
import { useFetch } from "./Hooks/useFetch"
import { useForm } from "react-hook-form"
import { usePost } from "./Hooks/usePost"
import { LoadingIcon } from "./Components/LoadingIcon"

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [allEmails, setAllEmails] = useState([])
    const [emailError, setEmailError] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    useFetch("/api/emails", setAllEmails)

    console.log(allEmails)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

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
        emailSent
            ? <div>
                <h3>Email Sent</h3>
            </div>
            :
            <div>
                {emailError
                    ?<div>
                        <h3>Failed to send email!</h3>
                    </div>
                    :null
                }

                {isLoading 
                    ? <LoadingIcon />
                    :
                    <TextContainers 
                        purpose="Send Email"
                        textArray={emailAarray}
                        register={register}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        onSubmit={handleNewEmail}
                    />
                }
            </div>
    )
}

export default App
