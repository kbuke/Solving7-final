import { RequiredInput } from "../../../../Components/RequiredInput";
import { UniqueInput } from "../../../../Components/UniqueInput";

export function PgSectionInput({
    allPgSections,
    currentId
}){
    return(
        [
            {
                type: "text",
                placeholder: "Please enter page section",
                className: "text-input-container",
                name: "pgTitle",
                validation: UniqueInput({
                    inputType: "Page Section",
                    allInstances: allPgSections,
                    field: "page",
                    currentId: currentId? currentId : null
                })
            },

            {
                type: "textarea",
                placeholder: "Please enter page info",
                className: "page-section-text-area",
                name: "pgText",
                validation: RequiredInput("Page Section Info")
            }
        ]
    )
}