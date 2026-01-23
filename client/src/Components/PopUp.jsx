import { DeleteInstance } from "./DeleteInstance";
import { PatchInstance } from "./PatchInstance";
import { PostInstance } from "./PostInstance";
import { RelationalInstance } from "./RelationalInstance";
import { useScrollLock } from "./useScrollLock";

export function PopUp({
    type,
    instanceType,
    inputArray,
    handleInstanceSubmit,
    instanceName,
    patchReset,
    selectedInstance,
    relationArray,
    relationKey,
    setRelationAction,
    setRelationalId,
    setState,
    success,
    setSuccess,
    setCloseAction
}){
    // Stop page behind from scrolling when pop up is active.
    useScrollLock(true)

    return(
        <div
            className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center"
        >
            {type === "post"
                ? <PostInstance 
                    instanceType={instanceType}
                    inputArray={inputArray}
                    handleInstanceSubmit={handleInstanceSubmit}
                    setState={setState}
                    success={success}
                    setSuccess={setSuccess}
                />
                : type === "delete"
                ? <DeleteInstance 
                    handleInstanceDelete={handleInstanceSubmit}
                    instanceName={instanceName}
                    instanceType={instanceType}
                    setState={setState}
                />
                : type === "patch"
                ? <PatchInstance 
                    instanceType={instanceType}
                    instanceName={instanceName}
                    patchReset={patchReset}
                    selectedInstance={selectedInstance}
                    handleInstancePatch={handleInstanceSubmit}
                    inputArray={inputArray}
                    setState={setState}
                />
                : type === "relational"
                ? <RelationalInstance 
                    relationTitle={instanceName}
                    relationArray={relationArray}
                    relationKey={relationKey}
                    setCloseAction={setCloseAction}
                    setRelationAction={setRelationAction}
                    setRelationalId={setRelationalId}
                />
                : null
            }
        </div>
    )
}