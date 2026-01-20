import { Hero } from "./HomePg/Hero"
import { Info } from "./HomePg/Info"
import greenLayer from "../../Resources/greenWave.svg"
import whiteLayer from "../../Resources/whiteWave.svg"
import { Articles } from "./HomePg/Articles"
import { Pillars } from "./HomePg/Pillars"
import { useOutletContext } from "react-router"
import { Contact } from "./HomePg/Contact"

export function HomePg(){
    const appData = useOutletContext()

    return(
        <div>
            <Hero />

            <Info />

            <Pillars 
                appData={appData}
            />

            <Articles />

            <Contact 
                appData={appData}
            />
        </div>
    )
}