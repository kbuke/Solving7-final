import { AdminTable } from "./AdminTables";

export function AdminInstance({
    id,
    title,
    hiddenValue,
    fields,
    // instanceButtons,
    relational,
    relationalArray,
    relationalKey,
    setRelationAction,
    setSelectedId,
    chosenId,
    setRelationalId,
    chosenRelationalId,
    setInstanceAction
}) {
    const instanceButtons = (type) => {
        return(
            <button
                className={`${type === "patch"
                    ? "bg-blue-600"
                    : "bg-red-600"
                }`}
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
        <div className="border-b border-black p-4">

            {/* hidden input / value */}
            <AdminTable
                label={title}
                type="text"
                value={hiddenValue}
                isHidden
            />

            {/* visible title */}
            <h2 className="hidden md:block text-center font-bold text-2xl mb-2">
                {hiddenValue}
            </h2>

            {/* fields */}
            <div className="lg:grid lg:grid-cols-2 lg:justify-items-center lg:text-center">
                {fields.map(({ label, type, value }, index) => (
                    <AdminTable
                        key={index}
                        label={label}
                        type={type}
                        value={value}
                    />
                ))}
            </div>

            {/* buttons */}
            <div className="instance-button-div">
                {instanceButtons("patch")}
                {instanceButtons("delete")}
            </div>

            {relational
                ? <div className="flex flex-col">
                        <h2
                            className="font-bold text-center mt-4 uppercase text-2xl"
                        >
                            {relational}
                        </h2>

                        <button
                            className="submit-button self-center mt-4 mb-2 w-50"
                            onClick={() => {
                                setRelationAction("post")
                                setSelectedId(id)
                            }}
                        >
                            Add {relational}
                        </button>

                        <div className="grid grid-cols-[1fr_3fr]">
                            <label className="font-bold">
                                {relational}
                            </label>

                            <ul className="list-disc list-inside">
                                {relationalArray?.map((relation, index) => (
                                    <div key={index} 
                                        className="flex flex-col border-b"
                                    >
                                        <li>
                                            {relation?.[relationalKey]}
                                        </li>

                                        <button 
                                            className="bg-red-600 h-10 w-20 self-center mt-2 mb-2"
                                            onClick={() => {
                                                setRelationalId(relation?.id)
                                                setRelationAction("delete")
                                                setSelectedId(chosenId)
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                : null
            }
        </div>
    );
}
