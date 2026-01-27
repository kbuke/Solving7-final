import unIcon from "../../../Resources/UN-Icon.png"

export function SustainableDeskTop({
    goalText,
    unCover,
    allSustainableGoals,
    unIcons,
    allSustainablePillars,
    pgInfo,
    achievedGoals,
    setSelectedGoalId
}){


    return(
        <section
            style={{backgroundImage: `url(${unCover})`}}
            className="w-full h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
        >
            <div
                className="w-9/10 h-9/10 bg-black/80 flex flex-col text-white overflow-y-auto rounded-2xl text-center"
            >
                <h1
                    className="uppercase text-[40px]"
                >
                    UN Sustainable Development Goals
                </h1>

                {pgInfo("Sustainability", "px-40 mt-4")}

                <img 
                    src={unIcon}
                    className="h-50 w-50 self-center"
                />

                <div>
                    {goalText("text-center font-semibold")}
                </div>

                <div
                    className="px-10 grid grid-cols-5 justify-items-center pb-6"
                >
                    {achievedGoals.map((goal, index) => (
                        <img 
                            key={index}
                            src={unIcons(goal?.id)}
                            className="h-42 w-42 rounded-2xl hover:scale-110 cursor-pointer duration-300 mt-4"
                            onClick={() => setSelectedGoalId(goal?.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}