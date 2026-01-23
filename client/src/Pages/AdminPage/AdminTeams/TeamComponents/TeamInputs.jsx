import { UniqueInput } from "../../../../Components/UniqueInput";

export function TeamInputs({
    allTeams,
    currentId
}){
    return([
        {
            type: "text",
            placeholder: "Please enter team name",
            className: "text-input-container",
            name: "teamName",
            validation: UniqueInput({
                inputType: "Team",
                allInstances: allTeams,
                field: "name",
                currentId: currentId ? currentId : null
            })
        },

        {
            type: "textarea",
            placeholder: "Please enter team info",
            className: "team-text-area",
            name: "teamIntro",
            validation: {
                required: "Please enter information about this team."
            }
        }
    ])
}