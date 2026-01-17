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

    const waves = (colour) => {
        return(
            <img
                src={colour === "white" ? whiteLayer : greenLayer} 
                alt={`${colour}-wave`}
                className="
                    absolute bottom-0 left-0 w-full translate-y-1/10 z-0 pointer-events-none
                "
            />
        )
    }

    return(
        <div>
            <Hero 
                wave={waves}
            />

            <Info 
                wave={waves}
            />

            <Pillars 
                appData={appData}
                wave={waves}
            />

            <Articles />

            <Contact 
                appData={appData}
            />
        </div>
    )
}