import { RequiredInput } from "../../../../Components/RequiredInput";
import { UniqueInput } from "../../../../Components/UniqueInput";

export function SustainableInputs({
    allSustainableGoals,
    currentId
}){
    return([
        {
            type: "text",
            placeholder: "Please enter UN Goal",
            className: "text-input-container",
            name: "unGoal",
            validation: {
                required: UniqueInput({
                    inputType: "Sustainable Goal",
                    allInstances: allSustainableGoals,
                    field: "goal",
                    currentId: currentId? currentId : null
                })
            }
        },

        {
            type: "textarea",
            placeholder: "Please enter info of UN Goal",
            className: "sustainable-text-area",
            name: "unGoalInfo",
            validation: RequiredInput("Sustainable Goal")
        }
    ])
}