import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeletePgSection({
    selectedPgSectionId,
    setAllPgSections,
    setPgSectionAction,
    selectedPgSection
}){
    const handleDeletePgSection = () => {
        useDelete(
            `/api/pgsections/${selectedPgSectionId}`,
            setAllPgSections,
            selectedPgSectionId,
            setPgSectionAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Page Section"}
            handleInstanceSubmit={handleDeletePgSection}
            instanceName={selectedPgSection?.page}
            setState={setPgSectionAction}
        />
    )
}