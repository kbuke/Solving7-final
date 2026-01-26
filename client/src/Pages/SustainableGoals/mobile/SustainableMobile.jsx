import greenWave from "../../../Resources/greenWave.svg"

export function SustainableMobile({
    coverPic,
    achievedGoals,
    unIcons,
    goalText,
    pgInfo
}){

    return(
        <div>
            <div
                style={{backgroundImage: `url(${coverPic})`}}
                className="h-60 w-full bg-cover bg-no-repeat bg-center md:h-120"
            />

            {pgInfo("Sustainability", "mt-2 text-center px-2")}

             <img 
                src={greenWave}
                className="-mt-50"
            />

            <div
                className="bg-[#bff1b2]"
            >
                <h1
                    className="font-bold uppercase text-[30px] tracking-wide text-center"
                >
                    Achieved UN Goals
                </h1>

                {goalText("text-center")}

                <div
                    className="grid grid-cols-3 gap-4 p-2 md:px-4 md:gap-8"
                >
                    {achievedGoals.map((goal, index) => (
                        <img 
                            src={unIcons(goal?.id)}
                            key={index}
                            className=""
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}