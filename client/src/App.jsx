import { useState } from "react"
import { useFetch } from "./Hooks/useFetch"
import { Outlet } from "react-router"

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [allEmails, setAllEmails] = useState([])
    const [allSocials, setAllSocials] = useState([])
    const [loggedUser, setLoggedUser] = useState(null)
    const [allPillars, setAllPillars] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [allTeams, setAllTeams] = useState([])

    useFetch("/api/emails", setAllEmails)
    useFetch("/api/socials", setAllSocials)
    useFetch("/api/session", setLoggedUser)
    useFetch("/api/pillars", setAllPillars) 
    useFetch("/api/products", setAllProducts)
    useFetch("/api/teams", setAllTeams)

    console.log(allTeams)


    const outletContext = {
        isLoading, setIsLoading,
        allEmails, setAllEmails,
        allSocials, setAllSocials,
        loggedUser, setLoggedUser,
        allPillars, setAllPillars,
        allProducts, setAllProducts,
        allTeams, setAllTeams
    }

    return(
        <>
            <Outlet context={outletContext}/>
        </>
    )
}

export default App
