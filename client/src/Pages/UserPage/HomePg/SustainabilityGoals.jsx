import { useEffect, useState } from "react"
import { WaveBg } from "../../../Components/WaveBg"
import { Carousel } from "../../../Components/Carousel"
import { LinkButton } from "../../../Components/LinkButton"

export function SustainabilityGoals({ appData }) {
  const [achievedGoals, setAchievedGoals] = useState([])

  useEffect(() => {
    if (!appData?.allSustainableGoals) return

    setAchievedGoals(
      appData.allSustainableGoals.filter(goal => goal.pillars.length > 0)
    )
  }, [appData])

  const unGoalCoverImg = (id) =>
    `/UN-Covers/${id}-cover.jpg`
  

  return (
    <section className="home-sections bg-green-section py-16 pb-26">
        <h1 className="home-section-header lg:hidden">
            UN Sustainability Goals
        </h1>
    
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[3fr_4fr]">
            <Carousel
                items={achievedGoals}
                renderItem={(goal) => (
                    <img
                        src={unGoalCoverImg(goal.id)}
                        alt={`UN Goal ${goal.id}`}
                        className="h-full w-200 object-contain rounded-xl"
                    />
                )}
            />

            <div>
                <h1 className="hidden lg:block home-section-header text-left text-[50px]">
                    UN Sustainability Goals
                </h1>

                <h2
                    className="font-bold uppercase text-center text-[17px] tracking-wide text-red-500"
                >
                    So Far Solving7 Has Achieved <span className="font-extrabold text-blue-600">{achievedGoals.length}</span> of the 17 UN Sustainable Goals
                </h2>

                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus odio quo vitae a recusandae, veritatis sint, atque suscipit nihil eos officia temporibus aliquam? Ratione possimus blanditiis obcaecati sapiente? Dolore?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolore tenetur illo iusto. Possimus error voluptatum nisi laboriosam accusantium eos? Ratione quia alias beatae velit pariatur consequuntur perspiciatis, cupiditate suscipit?
                </p>

                <LinkButton buttonLink={"/sustainablegoals"} />
            </div>
        </div>
        <WaveBg colour={"white"}/>
    </section>
  )
}
