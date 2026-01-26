import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { PopUp } from "../PopUp"
import { DesktopNavBar } from "./DesktopNavBar"

export function PublicNavBar() {
    const [openNav, setOpenNav] = useState(false)

    const navObjects = [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Pillars", link: "/pillars" },
        { text: "Products", link: "/products" },
        { text: "UN Goals", link: "/sustainablegoals" },
    ]

    return (
        <>
            {/* 🔹 MOBILE: Hamburger icon */}
            <div className="fixed top-4 right-4 z-50 lg:hidden">
                <FontAwesomeIcon
                    icon={faBars}
                    className="p-3 rounded-full bg-white shadow-md cursor-pointer"
                    onClick={() => setOpenNav(true)}
                />
            </div>

            {/* 🔹 MOBILE: Overlay menu */}
            {openNav && (
                <PopUp
                    type="mobile menu"
                    navMenu={navObjects}
                    setState={setOpenNav}
                />
            )}

            {/* 🔹 DESKTOP: Full navbar */}
            <div className="hidden lg:block sticky top-0 z-40">
                <DesktopNavBar navObjects={navObjects} />
            </div>
        </>
    )
}
