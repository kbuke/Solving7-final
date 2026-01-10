import { useState } from "react"
import { useFetch } from "./Hooks/useFetch"
import { Outlet } from "react-router"

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [allEmails, setAllEmails] = useState([])
    const [allSocials, setAllSocials] = useState([])
    const [loggedUser, setLoggedUser] = useState(null)
    const [allPillars, setAllPillars] = useState([])

    useFetch("/api/emails", setAllEmails)
    useFetch("/api/socials", setAllSocials)
    useFetch("/api/session", setLoggedUser)
    useFetch("/api/pillars", setAllPillars) 

    console.log(loggedUser)


    const outletContext = {
        isLoading, setIsLoading,
        allEmails, setAllEmails,
        allSocials, setAllSocials,
        loggedUser, setLoggedUser,
        allPillars, setAllPillars,

    }

    return(
        <>
            <Outlet context={outletContext}/>
        </>
    )
}

export default App
