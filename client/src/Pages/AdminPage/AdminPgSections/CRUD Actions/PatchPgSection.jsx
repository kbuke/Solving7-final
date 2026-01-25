import { PopUp } from "../../../../Components/PopUp"
import { usePatch } from "../../../../Hooks/usePatch"
import { PgSectionInput } from "../PgSectionComponent/PgSectionInputs"

export function PatchPgSection({
    allPgSections,
    selectedPgSectionId,
    setAllPgSections,
    setPgSectionAction,
    selectedPgSection
}){
    console.log(selectedPgSectionId)
    const patchPgSectionObject = [
        {
            key: "pgTitle",
            accessor: "page"
        },

        {
            key: "pgText",
            accessor: "text"
        }
    ]

    const handlePatchPageSection = (formData) => {
        console.log("hi there")
        const patchData = {
            pgTitle: formData?.pgTitle,
            pgText: formData?.pgText
        }

        usePatch(
            patchData, `/api/pgsections/${selectedPgSectionId}`,
            selectedPgSectionId, setAllPgSections, setPgSectionAction
        )
    }

    return(
        <PopUp 
            type={"patch"}
            instanceType={"Page Section"}
            instanceName={selectedPgSection?.page}
            patchReset={patchPgSectionObject}
            selectedInstance={selectedPgSection}
            inputArray={PgSectionInput({
                allPgSections: allPgSections,
                currentId: selectedPgSectionId
            })}
            handleInstanceSubmit={handlePatchPageSection}
            setState={setPgSectionAction}
        />
    )
}