import deskImg from "../../../Resources/deskImg.jpeg"

export function Info({
    wave
}){
    return(
        <div
            className="
                home-sections bg-green-section
                lg:p-10 lg:pb-25
            "
        >
            <h1 className="home-section-header">
                About Solving7
            </h1>

            <div
                className="
                    flex flex-col
                    lg:flex-row lg:p-6 lg:gap-10 lg:items-center
                "
            >
                <img 
                    src={deskImg}
                    alt="desk-img"
                    className="rounded-2xl md:h-100"
                />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio aperiam suscipit deleniti, repellat facere ducimus velit temporibus voluptas omnis dignissimos, expedita incidunt placeat quibusdam sunt a! Ullam, sapiente magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos tempora laboriosam est officia ipsa perspiciatis aliquid earum aliquam minus! Iure quis cum corrupti asperiores temporibus perferendis nulla magni sunt!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, reiciendis. Quia velit itaque officiis minima accusamus perspiciatis ab neque quibusdam amet dolore reprehenderit cumque totam quas nemo, nesciunt ducimus temporibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptates, odio quo tempore in assumenda, dolorem optio aspernatur vero rerum doloremque. Ipsam enim, porro tenetur obcaecati doloremque aliquid accusantium veniam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione illo delectus excepturi illum ipsum. Commodi minus iure, iusto quam perspiciatis tempore neque, quisquam beatae praesentium repudiandae dicta ab temporibus aliquam.
                </p>
            </div>

            {wave("white")}
        </div>
    )
}