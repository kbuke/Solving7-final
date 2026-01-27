import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

export function SustainablePopUpHeader({
    goalTitle,
    setSelectedId
}){
    return(
        <div
            className="flex items-center p-3 border-b border-gray-200 duration-200 hover:cursor-pointer w-full justify-self-center justify-between sticky top-0 z-100 bg-white"
        >
            <h1
                className="uppercase font-bold text-[25px] lg:text-[40px]"
            >
                {goalTitle}
            </h1>

            <div
                className="h-10 w-10 flex justify-center items-center rounded-full hover:bg-gray-600"
            >
                <FontAwesomeIcon 
                    icon={faTimesCircle}
                    className="text-red-600 text-[30px]"
                    onClick={() => setSelectedId(null)}
                />
            </div>
        </div>
    )
}