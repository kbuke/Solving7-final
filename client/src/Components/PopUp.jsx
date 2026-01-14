import { DeleteInstance } from "./DeleteInstance";
import { PatchInstance } from "./PatchInstance";
import { PostInstance } from "./PostInstance";

export function PopUp({
    type,
    instanceType,
    inputArray,
    handleInstanceSubmit,
    instanceName,
    patchReset,
    selectedInstance
}){
    return(
        <div
            className="fixed inset-0 bg-black z-50 flex justify-center items-center"
        >
            {type === "post"
                ? <PostInstance 
                    instanceType={instanceType}
                    inputArray={inputArray}
                    handleInstanceSubmit={handleInstanceSubmit}
                />
                : type === "delete"
                ? <DeleteInstance 
                    handleInstanceDelete={handleInstanceSubmit}
                    instanceName={instanceName}
                    instanceType={instanceType}
                />
                : type === "patch"
                ? <PatchInstance 
                    instanceType={instanceType}
                    instanceName={instanceName}
                    patchReset={patchReset}
                    selectedInstance={selectedInstance}
                    handleInstancePatch={handleInstanceSubmit}
                    inputArray={inputArray}
                />
                : null
            }
        </div>
    )
}