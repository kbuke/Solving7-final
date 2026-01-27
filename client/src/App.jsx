import { useEffect, useState } from "react"
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
    const [allTeamMembers, setAllTeamMembers] = useState([])
    const [allProductPillars, setAllProductPillars] = useState([])
    const [allMemberTeams, setAllMemberTeams] = useState([])
    const [allNews, setAllNews] = useState([])
    const [allSustainableGoals, setAllSustainableGoals] = useState([])
    const [allSustainablePillars, setAllSustainablePillars] = useState([])
    const [allHomeSections, setAllHomeSections] = useState([])
    const [allPgSections, setAllPgSections] = useState([])

    useFetch("/api/emails", setAllEmails)
    useFetch("/api/socials", setAllSocials)
    useFetch("/api/session", setLoggedUser)
    useFetch("/api/pillars", setAllPillars, [allSustainablePillars]) 
    useFetch("/api/products", setAllProducts, [allProductPillars, allPillars])
    useFetch("/api/teams", setAllTeams)
    useFetch("/api/pillarproducts", setAllProductPillars)
    useFetch("/api/members", setAllTeamMembers, [allMemberTeams, allTeams])
    useFetch("/api/memberteams", setAllMemberTeams)
    useFetch("/api/news", setAllNews)
    useFetch("/api/sustainabilitygoals", setAllSustainableGoals, [allSustainablePillars])
    useFetch("/api/pillargoals", setAllSustainablePillars)
    useFetch("/api/homesections", setAllHomeSections)
    useFetch("/api/pgsections", setAllPgSections)

    const pgInfo = (accessor, classNames) => {
        const sectionText = allPgSections.filter(pg => pg?.page?.trim().toLowerCase() === accessor?.trim().toLowerCase())

        return(
            <p className={classNames}>
                {sectionText[0]?.text}
            </p>
        )
    }


    const outletContext = {
        isLoading, setIsLoading,
        allEmails, setAllEmails,
        allSocials, setAllSocials,
        loggedUser, setLoggedUser,
        allPillars, setAllPillars,
        allProducts, setAllProducts,
        allTeams, setAllTeams,
        allProductPillars, setAllProductPillars,
        allTeamMembers, setAllTeamMembers,
        allMemberTeams, setAllMemberTeams,
        allNews, setAllNews,
        allSustainableGoals, setAllSustainableGoals,
        allSustainablePillars, setAllSustainablePillars,
        allHomeSections, setAllHomeSections,
        allPgSections, setAllPgSections,
        pgInfo
    }

    return(
        <>
            <Outlet context={outletContext}/>
        </>
    )
}

export default App
