import { PopUp } from "../../../../Components/PopUp"
import { usePatch } from "../../../../Hooks/usePatch"
import { HomeSectionInputs } from "../HomeSectionComponent/HomeSectionInputs"

export function PatchHomeSection({
    allHomeSections,
    selectedHomeSectionId,
    setAllHomeSections,
    setHomeSectionAction,
    selectedHomeSection
}){
    const patchHomeSectionObject = [
        {
            key: "sectionTitle",
            accessor: "section"
        },

        {
            key: "sectionInfo",
            accessor: "info"
        }
    ]

    const handleEditHomeSection = (formData) => {
        const patchData = {
            sectionTitle: formData?.sectionTitle,
            sectionInfo: formData?.sectionInfo
        }

        usePatch(
            patchData, `/api/homesections/${selectedHomeSectionId}`,
            selectedHomeSectionId, setAllHomeSections, setHomeSectionAction
        )
    }

    return(
        <PopUp 
            type={"patch"}
            instanceType={"Home Section"}
            instanceName={selectedHomeSection?.section}
            patchReset={patchHomeSectionObject}
            selectedInstance={selectedHomeSection}
            inputArray={HomeSectionInputs({
                allHomeSections: allHomeSections,
                currentId: selectedHomeSectionId
            })}
            handleInstanceSubmit={handleEditHomeSection}
            setState={setHomeSectionAction}
        />
    )
}