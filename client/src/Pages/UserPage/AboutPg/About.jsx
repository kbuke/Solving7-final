import { useOutletContext } from "react-router"
import { WaveBg } from "../../../Components/WaveBg"
import teamPic from "../../../Resources/teamPic.jpg"
import recyclePic from "../../../Resources/plasticImg.jpg"

export function About(){
    const appData = useOutletContext()

    const allTeams = appData?.allTeams
    console.log(allTeams)
    return(
        <section>
            <div
                style={{backgroundImage: `url(${teamPic})`}}
                className="bg-no-repeat bg-cover h-60 w-full lg:h-120"
            >
                <div
                    className="rounded-xl bg-green-600/60 relative top-20 w-90 flex justify-center px-4 py-8 left-4 lg:top-40"
                >
                    <h1
                        className="uppercase text-white text-[30px] tracking-widest"
                    >
                        About Solving7
                    </h1>
                </div>
            </div>

            <p
                className="mt-10 lg:px-50"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio atque deleniti voluptatibus ut repellat possimus corporis animi ipsam qui esse nemo, neque explicabo consectetur cum, sint fugit amet non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui totam, quibusdam voluptatibus, dolorem cupiditate reprehenderit molestias reiciendis quia ut quaerat quam eveniet? Nulla a repudiandae, soluta sint perspiciatis cum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi dolores architecto, minima expedita voluptatem fugiat libero in voluptatibus, earum doloribus soluta cumque minus quasi commodi, explicabo quod dolorem quisquam.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore saepe, sequi nostrum molestias tempora officia, pariatur iure, eius aliquid ab exercitationem consectetur amet dolore. Delectus sit culpa accusamus nam laudantium!
            </p>

            <div
                className="hidden lg:block relative overflow-hidden h-120 w-full"
            >
                <img 
                    src={recyclePic}
                    className="h-full w-full object-cover opacity-60"
                />

                <div
                    className="
                        absolute top-20 left-4
                        rounded-xl
                        z-20
                        h-80 w-97/100
                        bg-green-600/80
                        flex items-center justify-center
                        text-white text-xl
                    "
                >
                    Hi there
                </div>
            </div>

            <div
                className="flex flex-col px-2"
            >
                <h1
                    className="uppercase text-[40px] font-bold tracking-[10px] justify-self-center self-center"
                >
                    Our Team
                </h1>

                {allTeams.map((team, index) => {
                    const teamMembers = team?.members

                    return(
                        <div
                            key={index}
                        >
                            <h2
                                className="font-bold uppercase tracking-wide text-[20px]"
                            >
                                {team?.name}
                            </h2>

                            <p>
                                {team?.intro}
                            </p>

                            <div
                                className="block lg:grid lg:grid-cols-3 gap-10"
                            >
                                {teamMembers.map((member, i) => (
                                    <div
                                        key={i}
                                        className="
                                            grid grid-cols-2 gap-3 mb-8 border-b border-gray-400 py-4 justify-center items-center
                                        "
                                    >
                                        <img 
                                            src={member?.img}
                                        />

                                        <div>
                                            <h2
                                                className="uppercase font-bold tracking-widest"
                                            >
                                                {member?.name}
                                            </h2>

                                            <p className="text-sm">
                                                {member?.intro}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}