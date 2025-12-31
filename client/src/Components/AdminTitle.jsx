export function AdminTitle({
    sectionHeading,
    setState
}){
    return(
        <div>
            <h1>
                {sectionHeading}
            </h1>

            <button 
                className="post-button text-center"
                onClick={() => setState("Post")}    
            >
                Add {sectionHeading}
            </button>
        </div>
    )
}