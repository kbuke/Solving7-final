import { Hero } from "./HomePg/Hero"
import { Info } from "./HomePg/Info"
import { Articles } from "./HomePg/Articles"
import { Pillars } from "./HomePg/Pillars"
import { useOutletContext } from "react-router"
import { Contact } from "./HomePg/Contact"
import { SustainabilityGoals } from "./HomePg/SustainabilityGoals"

export function HomePg(){
    const appData = useOutletContext()

    return(
        <div>
            <Hero />

            <Info />

            <Pillars 
                appData={appData}
            />

            <SustainabilityGoals 
                appData={appData}
            />

            <Articles />

            {/* <Contact 
                appData={appData}
            /> */}
        </div>
    )
}