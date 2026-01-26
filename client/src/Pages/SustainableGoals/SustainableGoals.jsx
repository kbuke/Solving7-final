import { useOutletContext } from "react-router";
import { SustainableDeskTop } from "./desktop/SustainableDesktop";
import { SustainableMobile } from "./mobile/SustainableMobile";
import unCover from "../../Resources/un-goals-cover.jpg"
import { useEffect, useState } from "react";

export function SustainableGoals(){
    const [achievedGoals, setAchievedGoals] = useState([])

    const appData = useOutletContext()

    const allSustainableGoals = appData?.allSustainableGoals
    const allSustainablePillars = appData?.allSustainablePillars

    const noOfGoals = achievedGoals.length

    const pgInfo = appData?.pgInfo


    const goalText = (className) => {
        return(
            <p
                className={className}
            >
                So far Solving-7 has achieved {noOfGoals} of the 17 Sustainable Developent Goals
            </p>
        )
    }

    const unIcons = (id) => `/UN-Logos/${id}/${id}.jpg`

    useEffect(() => (
        setAchievedGoals(allSustainableGoals?.filter(goals => goals.pillars.length > 0))
    ), [allSustainableGoals])

    return(
        <>
            <div
                className="lg:hidden"
            >
                <SustainableMobile 
                    coverPic={unCover}
                    achievedGoals={achievedGoals}
                    unIcons={unIcons}
                    noOfGoals={noOfGoals}
                    goalText={goalText}
                    pgInfo={pgInfo}
                />
            </div>

            <div
                className="hidden lg:block"
            >
                <SustainableDeskTop 
                    goalText={goalText}
                    unCover={unCover}
                    allSustainableGoals={allSustainableGoals}
                    unIcons={unIcons}
                    allSustainablePillars={allSustainablePillars}
                    pgInfo={pgInfo}
                    achievedGoals={achievedGoals}
                />
            </div>
        </>
    )
}