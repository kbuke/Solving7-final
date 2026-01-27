import { WaveBg } from "../../../Components/WaveBg"
import heroImg from "../../../Resources/HomeImg.png"
import s7Icon from "../../../Resources/s7-icon.png"

export function Hero() {
    return (
        <div
            style={{ backgroundImage: `url(${heroImg})` }}
            className="
                home-sections
                h-100 lg:h-180
                bg-center bg-cover bg-no-repeat
                relative
                flex items-center
            "
        >
            <div className="w-80/100 bg-black/60 flex flex-col items-center p-2 rounded-xl lg:w-2/5">
                <div
                    className="flex flex-row items-center justify-center"
                >
                    <p
                        className="text-white uppercase font-bold text-[40px]"
                    >
                        SOLVING
                    </p>
                    <img 
                        src={s7Icon}
                        className="h-10 w-10"
                    />
                </div>
                <p className="text-white mb-4 uppercase">
                    Interested to know more?
                </p>

                <button className="bg-yellow-500 px-2 py-3 rounded-xl text-white animate-pulse hover:animate-none hover:-translate-y-2 duration-200">
                    Contact Us
                </button>
            </div>

            <WaveBg colour="green" />
        </div>
    )
}
