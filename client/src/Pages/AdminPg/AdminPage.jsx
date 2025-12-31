import { useOutletContext } from "react-router";
import { AdminPillars } from "./AdminComponents/AdminPillars";

export function AdminPage(){
    const appData = useOutletContext()

    return(
        <div>
            <AdminPillars 
                appData={appData}
            />
        </div>
    )
}