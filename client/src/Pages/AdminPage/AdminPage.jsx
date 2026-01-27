import { useOutletContext } from "react-router";
import { AdminPillars } from "./AdminPillars/AdminPillars";
import { AdminProducts } from "./AdminProducts/AdminProducts";
import { AdminTeams } from "./AdminTeams/AdminTeams";
import { AdminTeamMembers } from "./AdminTeamMembers/AdminTeamMembers";
import { AdminNews } from "./AdminNews/AdminNews";
import { useState } from "react";
import { AdminSustainableGoals } from "./AdminSustainableGoals/AdminSustainablleGoals";
import { AdminHomeSections } from "./AdminHomeSections/AdminHomeSection";
import { AdminPgSections } from "./AdminPgSections/AdminPgSections";

export function AdminPage(){
    const [openRelation, setOpenRelation] = useState()

    const appData = useOutletContext()

    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading

    const instanceButtons = (
        specificButtonClass,
        buttonText,
        setInstanceId,
        instanceId,
        setInstanceAction,
        action
    ) => {
        return(
            <button
                className={`instance-button ${specificButtonClass}`}
                onClick={() => {
                    setInstanceId(instanceId)
                    setInstanceAction(action)
                }}
            >
                {buttonText}
            </button>
        )
    }

    return(
        <div>
            <h1
                className="
                    text-center uppercase text-3xl font-bold
                    lg:text-6xl
                "
            >
                Solving 7 Admin Page
            </h1>

            <AdminPillars 
                appData={appData}
                instanceButtons={instanceButtons}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                openRelation={openRelation}
                setOpenRelation={setOpenRelation}
            />

            <AdminProducts 
                appData={appData}
                instanceButtons={instanceButtons}
                openRelation={openRelation}
                setOpenRelation={setOpenRelation}
            />

            <AdminTeams 
                appData={appData}
                instanceButtons={instanceButtons}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />

            <AdminTeamMembers 
                appData={appData}
                instanceButtons={instanceButtons}
                openRelation={openRelation}
                setOpenRelation={setOpenRelation}
            />

            <AdminSustainableGoals 
                appData={appData}
                openRelation={openRelation}
                setOpenRelation={setOpenRelation}
            />

            <AdminNews 
                appData={appData}
            />

            <AdminHomeSections 
                appData={appData}
            />

            <AdminPgSections 
                appData={appData}
            />
        </div>
    )
}