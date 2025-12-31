import { useState } from "react"
import { useFetch } from "./Hooks/useFetch"
import { useForm } from "react-hook-form"
import { Outlet } from "react-router"

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [allEmails, setAllEmails] = useState([])
    const [allSocials, setAllSocials] = useState([])
    const [loggedUser, setLoggedUser] = useState([])
    const [allPillars, setAllPillars] = useState([])

    useFetch("/api/emails", setAllEmails)
    useFetch("/api/socials", setAllSocials)
    useFetch("/api/session", setLoggedUser)
    useFetch("/api/pillars", setAllPillars) 

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control
    } = useForm()

    const outletContext = {
        isLoading, setIsLoading,
        allEmails, setAllEmails,
        allSocials, setAllSocials,
        loggedUser, setLoggedUser,
        allPillars, setAllPillars,

        register, handleSubmit,
        errors, reset,
        control
    }

    return(
        <>
            <Outlet context={outletContext}/>
        </>
    )
}

export default App
