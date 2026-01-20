import { AdminTable } from "./AdminTables"
import { WaveBg } from "./WaveBg"

export function AdminSections({
    bgColour,
    sectionTitle,
    currentInstances,
    maxInstances,
    setInstanceAction,
    table
}){
    return(
        <div className={`admin-section ${bgColour === "green" ? "bg-white" : "bg-[#bff1b2]"}`}>
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
            
            <WaveBg colour={bgColour}/>
        </div>
    )
}