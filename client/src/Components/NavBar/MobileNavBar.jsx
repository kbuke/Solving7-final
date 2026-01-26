import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

export function MobileNavBar({
    navMenu,
    setState
}){
    return(
        <div
            className="min-h-screen w-full bg-black/60 flex flex-col items-center justify-center"
        >
            <div
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
            >
                <FontAwesomeIcon 
                    icon={faTimesCircle}
                    className="text-red-600 min-h-full w-full"
                    onClick={() => setState(false)}
                />
            </div>

            {navMenu.map((nav, index) => (
                <Link
                    key={index}
                    className="text-white uppercase font-bold tracking-[5px] p-4 border-b w-9/10 text-center"
                    to={nav?.link}
                    onClick={() => setState(false)}
                >
                    {nav?.text}
                </Link>
            ))}
        </div>
    )
}