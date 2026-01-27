import { DeleteInstance } from "./DeleteInstance";
import { MobileNavBar } from "./NavBar/MobileNavBar";
import { PatchInstance } from "./PatchInstance";
import { PostInstance } from "./PostInstance";
import { RelationalInstance } from "./RelationalInstance";
import { SustainablePopUp } from "./SustainablePopUp";
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
    setCloseAction,
    navMenu,
    selectedId,
    setSelectedId,
    additionalRelationArray,
    editComponent   // NEW PROP
}) {
    useScrollLock(true);

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40">
            {type === "post" && (
                <PostInstance 
                    instanceType={instanceType}
                    inputArray={inputArray}
                    handleInstanceSubmit={handleInstanceSubmit}
                    setState={setState}
                    success={success}
                    setSuccess={setSuccess}
                />
            )}
            {type === "delete" && (
                <DeleteInstance 
                    handleInstanceDelete={handleInstanceSubmit}
                    instanceName={instanceName}
                    instanceType={instanceType}
                    setState={setState}
                />
            )}
            {type === "patch" && (
                <PatchInstance 
                    instanceType={instanceType}
                    instanceName={instanceName}
                    patchReset={patchReset}
                    selectedInstance={selectedInstance}
                    handleInstancePatch={handleInstanceSubmit}
                    inputArray={inputArray}
                    setState={setState}
                />
            )}
            {type === "relational" && (
                <RelationalInstance 
                    relationTitle={instanceName}
                    relationArray={relationArray}
                    relationKey={relationKey}
                    setCloseAction={setCloseAction}
                    setRelationAction={setRelationAction}
                    setRelationalId={setRelationalId}
                    setState={setState}
                    additionalRelationArray={additionalRelationArray}
                />
            )}
            {type === "edit" && editComponent && editComponent}
            {type === "mobile menu" && (
                <MobileNavBar navMenu={navMenu} setState={setState} />
            )}
            {type === "sustainable popup" && (
                <SustainablePopUp selectedId={selectedId} setSelectedId={setSelectedId} />
            )}
        </div>
    );
}
