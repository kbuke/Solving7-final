import { AdminTable } from "./AdminTables"

export function AdminSections({
    bgColour,
    sectionTitle,
    currentInstances,
    maxInstances,
    setInstanceAction,
    table
}){
    return(
        <div className={bgColour}>
            <div
                className="flex flex-col justify-center items-center"
            >
                <h1
                    className="text-center admin-section-title"
                >
                    {sectionTitle}
                </h1>

                {maxInstances && currentInstances >= maxInstances
                    ? null 
                    : <button 
                        className="submit-button mt-4 w-40 hover:-translate-y-2"
                        onClick={() => setInstanceAction("post")}
                    >
                        Add New Instance
                    </button>
                }
            </div>

            {table}
        </div>
    )
}