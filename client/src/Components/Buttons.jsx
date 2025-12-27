export function Buttons({
    text,
    buttonType,
    submitEnabled=false
}){
    return(
        <button
            className={
                `rounded-lg p-4 
                text-white
                mt-4
                ${buttonType==="Submit" && submitEnabled===true ? "cursor-not-allowed" : "cursor-pointer"}
                ${buttonType==="Submit" ? "bg-linear-to-r from-green-400 to-green-700" : null}`}
        >
            {text}
        </button>
    )
}