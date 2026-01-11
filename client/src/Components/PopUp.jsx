import { PostInstance } from "./PostInstance";

export function PopUp({
    instanceType,
    inputArray,
    handleInstanceSubmit
}){
    return(
        <div
            className="fixed inset-0 bg-black z-50 flex justify-center items-center"
        >
            <PostInstance 
                instanceType={instanceType}
                inputArray={inputArray}
                handleInstanceSubmit={handleInstanceSubmit}
            />
        </div>
    )
}