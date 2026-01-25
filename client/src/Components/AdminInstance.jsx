import { AdminTable } from "./AdminTables";

export function AdminInstance({
    index,
    total,
    title,
    hiddenValue,
    instanceImg,
    additionalImgClass,
    fields,
    relational,
    setSelectedRelation,
    setSelectedId,
    chosenId,
    setInstanceAction
}) {
    const instanceButtons = (type) => {
        return(
            <button
                className={`${type === "patch"
                    ? "bg-blue-600"
                    : "bg-red-600"
                } w-40`}
                onClick={() => {
                    setSelectedId(chosenId)
                    setInstanceAction(type)
                }}
            >
                {type === "patch"
                    ? "Edit Instance"
                    : "Delete Instance"
                }
            </button>
        )
    }
    
    return (
        <div className={`mt-10 pb-10 ${index !== total - 1 ? "border-b border-dashed border-gray-400" : ""}`}>

            <div className="flex flex-col lg:flex-row lg:gap-50 lg:p-10">
                <div>
                    <AdminTable
                        label={title}
                        type="text"
                        value={hiddenValue}
                    />

                    {/* fields */}
                    <div>
                        {fields.map(({ label, type, value }, index) => (
                            <AdminTable
                                key={index}
                                label={label}
                                type={type}
                                value={value}
                            />
                        ))}
                    </div>
                </div>
                {
                        instanceImg 
                            ? <img 
                                src={instanceImg}
                                // className={`lg:h-50 lg:w-100 ${additionalImgClass}`}
                                className={additionalImgClass ? additionalImgClass : "lg:h-50 lg:w-100"}
                            />
                            : null
                    }
            </div>

            {/* buttons */}
            <div className="instance-button-div">
                {instanceButtons("patch")}
                {instanceButtons("delete")}
            </div>

            {
                relational 
                ? <div className="flex flex-col items-center mt-10">
                    <h2 className="uppercase font-bold tracking-wide text-[25px]">Relations</h2>
                    <button 
                        className="bg-purple-600 w-40"
                        onClick={() => {
                            setSelectedRelation(relational)
                            setSelectedId(chosenId)
                        }}
                    >
                        {relational}
                    </button>
                </div>
                : null
            }
        </div>
    );
}
