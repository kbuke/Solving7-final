import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

export function PopUpHeader({
    header,
    setState
}){
    return(
        <div
            className="grid grid-cols-[2fr_1fr] border-b gap-20 py-2"
        >
            <h1
                className="font-bold relative left-5 uppercase"
            >
                {header}
            </h1>

            <button
                onClick={() => setState("")}
                className="rounded-full h-10 w-10"
                type="button"
            >
                <FontAwesomeIcon 
                    icon={faTimesCircle}
                    className="bg-red-600 rounded-full min-h-full min-w-full"
                />
            </button>
        </div>
    )
}