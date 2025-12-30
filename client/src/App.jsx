import { useState } from "react"
import { useFetch } from "./Hooks/useFetch"
import { useForm } from "react-hook-form"
import { Outlet } from "react-router"

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [allEmails, setAllEmails] = useState([])
    const [allSocials, setAllSocials] = useState([])
    const [loggedUser, setLoggedUser] = useState([])

    useFetch("/api/emails", setAllEmails)
    useFetch("/api/socials", setAllSocials)
    useFetch("/api/session", setLoggedUser)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const outletContext = {
        isLoading, setIsLoading,
        allEmails, setAllEmails,
        allSocials, setAllSocials,
        loggedUser, setLoggedUser,

        register, handleSubmit,
        errors
    }

    return(
        <>
            <Outlet context={outletContext}/>
        </>
    )
}

export default App
