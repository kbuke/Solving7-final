import { useState } from "react"
import { WaveBg } from "../../../Components/WaveBg"

export function Pillars({ 
    appData ,
    wave
}) {
  const allPillars = appData?.allPillars ?? []
  const [index, setIndex] = useState(0)

  return (
    <div className="
        home-sections mt-7 px-1 pb-26
        lg:mt-2
    ">
        <div
            className="
                flex flex-col
                lg:flex-row lg:px-10 lg:gap-4 lg:justify-center lg:items-center
            "
        >
            <div>
                <h1
                    className="hidden lg:block home-section-header text-left text-[50px]"
                >
                    Our 7 Pillars
                </h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas assumenda sint recusandae soluta consequuntur ex accusamus molestiae ducimus itaque sit nesciunt voluptatibus dolorem, quos ab, hic molestias. Quaerat, nesciunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum consequatur ad modi, aliquid perspiciatis quos at aperiam itaque nesciunt nihil, reiciendis repellat eius officia sequi corrupti ipsam ex pariatur id.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores placeat quaerat dolorum ipsam veritatis ipsum illum? Sapiente veniam molestiae distinctio delectus beatae quaerat neque corrupti dolorum iste? Ad, harum dignissimos.</p>

                <button className="link-button">
                    Learn More <span className="animate-pulse">→</span>
                </button>
            </div>

            <div className="py-3 overflow-hidden">
                <div
                    className="carousel-track h-60 w-105 self-center justify-self-center lg:h-100 lg:w-400"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {allPillars.map((pillar, i) => (
                        <div
                            key={i}
                            className="
                                carousel-slide rounded-2xl bg-no-repeat flex justify-center items-center
                            "
                            style={{ backgroundImage: `url(${pillar.img})` }}
                        >
                            <div
                                className="
                                    flex flex-col text-center lg:p-12 bg-black/60 rounded-2xl py-3
                                    text-white
                                "
                            >
                                <h2 className="font-bold uppercase tracking-widest text-2xl lg:text-4xl">
                                    Pillar {pillar?.id}
                                </h2>

                                <h2 className="font-bold tracking-wider text-md uppercase">
                                    {pillar?.pillar}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-dots">
                    {allPillars.map((_, i) => (
                    <button
                        key={i}
                        className={i === index ? "dot active" : "dot"}
                        onClick={() => setIndex(i)}
                    />
                    ))}
                </div>
            </div>
        </div>

        <WaveBg colour={"green"}/>
    </div>
  )
}
