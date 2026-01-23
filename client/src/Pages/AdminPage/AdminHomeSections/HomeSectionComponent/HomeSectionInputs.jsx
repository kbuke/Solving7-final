import { RequiredInput } from "../../../../Components/RequiredInput";
import { UniqueInput } from "../../../../Components/UniqueInput";

export function HomeSectionInputs({
    allHomeSections,
    currentId
}){
    return(
        [
            {
                type: "text",
                placeholder: "Please enter section heading",
                className: "text-input-container",
                name: "sectionTitle",
                validation: UniqueInput({
                    inputType: "Home Section",
                    allInstances: allHomeSections,
                    field: "section",
                    currentId: currentId? currentId : null
                })
            },

            {
                type: "textarea",
                placeholder: "Please enter home section info",
                className: "home-section-text-area",
                name: "sectionInfo",
                validation: RequiredInput("Home Section Info")
            }
        ]
    )
}