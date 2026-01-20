export function AdminTable({
    label, 
    type, 
    value
}){
    return(
        <div
            className={`
                ${type === "text" ? "grid grid-cols-[1fr_2fr] lg:grid-cols-[1fr_4fr]" : null}
                mb-4
            `}
        >
            <label
                className="font-bold"
            >
                {label}
            </label>

            {type === "img"
                ? null
                : <p className="lg:w-150">
                    {value}
                </p>
            }

        </div>
    )
}