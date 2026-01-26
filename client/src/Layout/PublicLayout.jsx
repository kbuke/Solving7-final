import { Outlet, useOutletContext } from "react-router";
import { PublicNavBar } from "../Components/NavBar/PublicNavBar";

export function PublicLayout(){
    const appData = useOutletContext()

    return(
        <>
            <PublicNavBar />
            <Outlet context={appData}/>
        </>
    )
}