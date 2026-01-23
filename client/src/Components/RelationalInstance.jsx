import { PopUpHeader } from "./PopUpHeader"

export function RelationalInstance({
    relationTitle,
    relationArray,
    relationKey,
    setCloseAction,
    setRelationAction,
    setRelationalId
}){
    return(
        <div className="h-9/10 w-90 bg-white flex flex-col justify-center items-center rounded">
            <PopUpHeader 
                header={"New Pillar"}
                setState={(setCloseAction)}
            />

            <button 
                className="bg-green-600 w-60 mb-4"
                onClick={() => {
                    setRelationAction("post")
                }}
            >
                Add {relationTitle}
            </button>

            <div>
                <ul className="list-disc list-inside">
                    {relationArray.map((relation, index) => (
                        <div
                            key={index}
                            className="flex flex-col border-b"
                        >
                            <li>
                                {relation?.[relationKey]}
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
    )
}