import { PopUpHeader } from "./PopUpHeader"

export function RelationalInstance({
    relationTitle,
    relationArray,
    relationKey,
    idKey = "id",       // Dynamic ID for delete action
    setCloseAction,
    setRelationAction,
    setRelationalId,
    setState,
    additionalRelationArray
}){
    return (
        <div className="h-9/10 w-9/10 bg-white rounded flex flex-col lg:w-2/3 overflow-y-auto">
            <PopUpHeader 
                header={relationTitle}
                setState={setState}
            />

            <div className="flex flex-col py-10 px-4">
                {relationArray.length === 0 && (
                    <p>No Defined Relations</p>
                )}

                <button 
                    className="bg-green-600 w-60 mb-4 self-center h-12 rounded"
                    onClick={() => setRelationAction("post")}
                >
                    Add {relationTitle}
                </button>

                <ul className="list-disc list-inside">
                    {relationArray.map((relation) => {
                        const relationshipObj = additionalRelationArray?.find(
                            r => r.sustainable_id === relation.id
                        );

                        return (
                            <li key={relation.id} className="flex flex-col border-b py-2">
                                <div className="flex justify-between items-center">
                                    <span>{relation.goal}</span>

                                    <div className="flex gap-2">
                                        <button
                                            className="bg-yellow-500 h-8 w-20 rounded"
                                            onClick={() => {
                                                setRelationalId(relation.id);
                                                setRelationAction("edit"); // Trigger edit modal
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="bg-red-600 h-8 w-20 rounded"
                                            onClick={() => {
                                                setRelationalId(relation.id);
                                                setRelationAction("delete");
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                {relationshipObj?.relationship && (
                                    <p className="text-gray-600 mt-1">{relationshipObj.relationship}</p>
                                )}
                            </li>
                        );
                    })}
                </ul>


            </div>
        </div>
    )
}
