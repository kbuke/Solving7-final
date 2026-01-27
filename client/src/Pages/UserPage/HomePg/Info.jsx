import { LinkButton } from "../../../Components/LinkButton"
import { WaveBg } from "../../../Components/WaveBg"
import deskImg from "../../../Resources/deskImg.jpeg"
import educationLogo from "../../../Resources/educationLogo.png"
import housingLogo from "../../../Resources/housingLogo.png"
import recycleLogo from "../../../Resources/recycleLogo.png"

export function Info(){

    const aboutObj = [
        {
            img: recycleLogo,
            icon: "recycle",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },

        {
            img: educationLogo,
            icon: "education",
            info: "We have improved the education of over twenty-thousand students."
        },

        {
            img: housingLogo,
            icon: "housing",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

    return(
        <div
            className="
                home-sections bg-green-section
                lg:p-10 lg:pb-25
            "
        >
            <h1 className="home-section-header lg:hidden">
                About Solving7
            </h1>

            <div
                className="
                    flex flex-col
                    lg:flex-row lg:p-6 lg:gap-30 lg:items-center
                "
            >
                <div
                    className="mb-4 lg:p-4 lg:border-8 lg:border-green-600 rounded"
                >
                    <img 
                        src={deskImg}
                        alt="desk-img"
                        className="rounded-2xl md:h-100"
                    />
                </div>

                <div className="lg:w-170">
                    <h1
                        className="hidden lg:block home-section-header text-left text-[50px]"
                    >
                        About Solving7
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, vel minus nulla dicta impedit animi dolores modi libero ratione totam repellat nobis mollitia, quas velit nam expedita numquam temporibus. Molestiae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis soluta veniam placeat sit, maxime a quasi tempora quibusdam labore obcaecati molestiae, at enim tenetur dolorum voluptate vitae beatae officia.
                    </p>

                    <div
                        className="lg:flex lg:gap-6"
                    >
                        {aboutObj.map((about, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[1fr_2fr] gap-2 items-center"
                            >
                                <img 
                                    src={about?.img}
                                    alt={`${about?.icon}-logo`}
                                    className="h-20"
                                />

                                <p>
                                    {about?.info}
                                </p>
                            </div>
                        ))}
                    </div>

                    
                    <LinkButton buttonLink="/about" />
                </div>
            </div>
            <WaveBg colour={"white"}/>
        </div>
    )
}