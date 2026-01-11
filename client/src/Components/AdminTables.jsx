export function AdminTable({
    label, type, value, isHidden
}){
    return(
        <div
            className={`
                grid grid-cols-[2fr_3fr] gap-2
                ${isHidden ? "lg:hidden" : null}

                lg:flex lg:flex-col
            `}
        >
            <label
                className="font-bold"
            >
                {label}
            </label>

            {type === "img"
                ?<img 
                    src={value}
                />
                : <p>
                    {value}
                </p>
            }
        </div>
    )
}