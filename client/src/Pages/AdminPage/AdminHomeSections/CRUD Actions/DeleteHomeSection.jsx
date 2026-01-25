import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteHomeSection({
    selectedHomeSectionId,
    setAllHomeSections,
    setHomeSectionAction,
    selectedHomeSection
}){ 
    const handleDeleteHomeSection = () => {
        useDelete(
            `/api/homesections/${selectedHomeSectionId}`,
            setAllHomeSections,
            selectedHomeSectionId,
            setHomeSectionAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Home Section"}
            handleInstanceSubmit={handleDeleteHomeSection}
            instanceName={selectedHomeSection?.section}
            setState={setHomeSectionAction}
        />
    )
}