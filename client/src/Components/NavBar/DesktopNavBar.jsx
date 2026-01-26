import { Link, NavLink } from "react-router"
import s7Icon from "../../Resources/S7-icon.png"

export function DesktopNavBar({
    navObjects
}){
    return(
        <div
            className="bg-black h-20 w-full flex flex-row items-center justify-around"
        >
            <NavLink
                className="bg-white rounded-full p-2"
            >
                <img 
                    src={s7Icon}
                    className="h-13"
                />
            </NavLink>

            {navObjects.map((nav, index) => (
                <Link
                    to={nav?.link}
                    key={index}
                    className="text-white uppercase text-[22px] font-bold hover:tracking-[10px] duration-300"
                >
                    {nav?.text}
                </Link>
            ))}
        </div>
    )
}