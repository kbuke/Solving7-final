import { PostEmail } from "./PostEmail";

export function Contact({
    appData
}){
    return(
        <div
            className="
                home-sections bg-white-section
            "
        >
            <h1 className="home-section-header">
                Contact Us
            </h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint eligendi eaque aperiam aspernatur! Animi totam, eius accusamus, eos nisi at voluptate eum maxime doloribus doloremque quisquam itaque molestias natus.</p>

            <div className="lg:grid lg:grid-cols-[1fr_2fr] gap-3 lg:justify-center items-center">
                <div>
                    <h1>Social Media</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sit enim, expedita consectetur culpa, amet repudiandae error at corporis voluptas nihil reiciendis distinctio esse autem maxime officia rerum quo recusandae!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eos expedita at veniam animi beatae, aliquid ullam quia ex iure aliquam. Facere repellendus rem non quae vitae sit modi natus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius reprehenderit exercitationem repudiandae ab suscipit voluptas, doloribus quas deleniti facere ratione eaque id repellat maxime laborum aspernatur iure, commodi fugit.</p>
                </div>

                <PostEmail 
                    appData={appData}
                />
            </div>
        </div>
    )
}