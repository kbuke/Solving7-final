import heroImg from "../../../Resources/HomeImg.png"

export function Hero({
    wave
}){
    return(
        <div
            style={{
                backgroundImage: `url(${heroImg})`
            }}
            className="home-sections h-100 bg-center bg-cover bg-no-repeat lg:h-180"
        >
            {wave("green")}
        </div>
    )
}