export function Buttons({
    text,
    buttonType,
    submitEnabled=false
}){
    return(
        <button
            className={
                `${buttonType==="Submit" 
                    ? "submit-button"
                    : null
                }
                `}
        >
            {text}
        </button>
    )
}