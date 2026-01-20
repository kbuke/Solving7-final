import greenLayer from "../Resources/greenWave.svg"
import whiteLayer from "../Resources/whiteWave.svg"

export function WaveBg({
    colour
}){
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