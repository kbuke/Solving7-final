export function SustainableInputs(){
    return([
        {
            type: "text",
            placeholder: "Please enter UN Goal",
            className: "text-input-container",
            name: "unGoal",
            validation: {
                required: "Please enter UN Goal"
            }
        },

        {
            type: "textarea",
            placeholder: "Please enter info of UN Goal",
            className: "sustainable-text-area",
            name: "unGoalInfo",
            validation: {
                required: "Please enter info about the goal"
            }
        }
    ])
}