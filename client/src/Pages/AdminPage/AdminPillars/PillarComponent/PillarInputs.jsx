import { RequiredInput } from "../../../../Components/RequiredInput";
import { UniqueInput } from "../../../../Components/UniqueInput";

export function PillarInputs({
    allPillars,
    currentId
}){
    return(
        [
            {
                type: "text",
                placeholder: "Please enter pillar goal",
                className: "text-input-container",
                name: "pillar",
                validation: UniqueInput({
                    inputType: "Pillar",
                    allInstances: allPillars,
                    field: "pillar",
                    currentId: currentId ? currentId : null
                })
            },

            {
                type: "textarea",
                placeholder: "Please enter pillars information",
                className: "pillar-text-area",
                name: "pillarIntro",
                validation: RequiredInput("Pillar Info")
            },

            {
                type: "text",
                placeholder: "Please enter image link for pillar",
                className: "text-input-container",
                name: "pillarImg",
                validation: RequiredInput("Pillar Img")
            }
        ]
    )
}