import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { SustainablePopUpHeader } from "./SustainablePopUpHeader";
import { useOutlet, useOutletContext } from "react-router";

export function SustainablePopUp({
    selectedId,
    setSelectedId
}){
    const [selectedGoal, setSelectedGoal] = useState([])

    useFetch(`/api/sustainabilitygoals/${selectedId}`, setSelectedGoal, [selectedId])

    const appData = useOutletContext()

    const allSustainablePillars = appData?.allSustainablePillars

    console.log(allSustainablePillars)

    const goalTitle = selectedGoal?.goal

    const unGoalCoverImg = (id) =>
        `/UN-Covers/${id}-cover.jpg`

    const unDesktopPopUpImg = (id) => 
        `/UN-Popup-Cover/${id}-popup.png`

    const pillarCoverImg = (id) => 
        `/Pillar-Img/pillar-${id}.png`

    const sustainablePillars = selectedGoal?.pillars


    return(
        <div
            className="h-9/10 w-9/10 bg-white overflow-y-auto lg:grid grid-cols-[1fr_3fr]"
        >
            <img 
                src={unDesktopPopUpImg(selectedId)}
                className="hidden lg:block h-full"
            />
            
            <div
                className="h-full overflow-y-auto"
            >
                <div
                    style={{backgroundImage: `url(${unGoalCoverImg(selectedId)})`}}
                    className="w-full block h-2/5 bg-no-repeat bg-center bg-cover md:h-4/5 lg:hidden"
                />

                <SustainablePopUpHeader 
                    goalTitle={goalTitle}
                    setSelectedId={setSelectedId}
                />

                <p
                    className="py-2 px-4 lg:px-10"
                >
                    {selectedGoal?.info}
                </p>

                <div>
                    <h1
                        className="px-4 uppercase font-bold text-[20px] lg:text-[25px]"
                    >
                        How Does Solving7 Meet This?
                    </h1>

                    {sustainablePillars?.map((sustainPillar, index) => {
                        console.log(sustainPillar)
                        const pillarId = sustainPillar?.id

                        const pillarGoal = allSustainablePillars?.find(
                            pg =>
                                pg.pillar_id === sustainPillar.id &&
                                pg.sustainable_id === Number(selectedId)
                        )

                        console.log(pillarGoal?.relationship?.length)

                        console.log(`I am looking at sustainable goal: ${selectedId} and Pillar: ${pillarId}`)

                        console.log(pillarGoal)
                        return(
                            <div
                                key={index}
                                className="pb-4 px-2"
                            >
                                <div 
                                    style={{backgroundImage: `url(${sustainPillar?.img})`}}
                                    className="h-60 w-full bg-center bg-no-repeat bg-cover flex justify-center items-center"
                                >
                                    <div
                                        className="bg-black/60 text-white w-9/10 text-center uppercase p-2 rounded-xl"
                                    >
                                        <h2
                                            className="font-extrabold tracking-widest text-[30px]"
                                        >
                                            Pillar {sustainPillar?.id}
                                        </h2>

                                        <h3>{sustainPillar?.pillar}</h3>
                                    </div>
                                </div>
                                {
                                    pillarGoal?.relationship?.length > 0
                                        ? <p>
                                            {pillarGoal?.relationship}
                                        </p>
                                        : <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ad tempore sed magni quam reprehenderit dolor facere, aspernatur laboriosam numquam nisi, debitis dolorem, repellendus quasi. Eos quasi dolores cupiditate officia?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque voluptatem doloribus nulla similique deserunt suscipit dolor. Tempora exercitationem quibusdam, omnis blanditiis provident ipsam quae aperiam sed necessitatibus ullam nesciunt.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt ad perferendis illum dolor iste, quibusdam doloribus sit deleniti fugit debitis eveniet incidunt eaque repellat delectus rerum distinctio eum ipsum.
                                            Lorem
                                        </p>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}