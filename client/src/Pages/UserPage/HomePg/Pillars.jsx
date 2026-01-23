import { WaveBg } from "../../../Components/WaveBg"
import { Carousel } from "../../../Components/Carousel"

export function Pillars({ 
    appData 
}) {
  const allPillars = appData?.allPillars ?? []

  const pillarCoverImg = (id) => `/Pillar-Img/pillar-${id}.png`

  return (
    <section className="home-sections py-16 pb-26">
        <h1 className="home-section-header lg:hidden">
            UN Sustainability Goals
        </h1>
    
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[4fr_3fr]">
            <div>
                <h1 className="hidden lg:block home-section-header text-left text-[50px]">
                    UN Sustainability Goals
                </h1>

                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus odio quo vitae a recusandae, veritatis sint, atque suscipit nihil eos officia temporibus aliquam? Ratione possimus blanditiis obcaecati sapiente? Dolore?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolore tenetur illo iusto. Possimus error voluptatum nisi laboriosam accusantium eos? Ratione quia alias beatae velit pariatur consequuntur perspiciatis, cupiditate suscipit?
                </p>

                <button
                    className="link-button"
                >
                    Learn More <span className="animate-pulse">→</span>
                </button>
            </div>

            <Carousel
                items={allPillars}
                renderItem={(goal) => (
                    <img
                        src={pillarCoverImg(goal.id)}
                        alt={`UN Goal ${goal.id}`}
                        className="max-h-full max-w-full rounded-xl"
                    />
                )}
            />
            
            <WaveBg colour={"green"}/>
        </div>
    </section>
  )
}
