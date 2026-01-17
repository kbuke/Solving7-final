import { PostEmail } from "./PostEmail";

export function Contact({
    appData
}){
    return(
        <div
            className="
                home-sections bg-green-section
            "
        >
            <h1 className="home-section-header">
                Contact Us
            </h1>

            <div>
                <div>
                    <div className="flex flex-col">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quo neque deserunt vitae aspernatur eum id consequuntur voluptas officia harum, cupiditate, quibusdam fuga corporis sit animi optio laboriosam iste at.</p>

                        <div>
                            <h1 className="font-bold uppercase">Social Media</h1>
                        </div>
                    </div>
                </div>
            </div>

            <PostEmail 
                appData={appData}
            />
        </div>
    )
}