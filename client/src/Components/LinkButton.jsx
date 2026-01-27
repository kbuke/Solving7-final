import { Link } from "react-router"

export function LinkButton({
    buttonLink
}){
    console.log(buttonLink)
    return(
        <Link
            to={buttonLink}
            className=" 
                inline-block
                bg-yellow-500
                rounded-xl
                px-6 py-4
                mt-4
                text-white
                hover:-translate-y-2
                hover:shadow-md
                duration-200
            "
        >
            Learn More <span className="animate-pulse">→</span>
        </Link>
    )
}