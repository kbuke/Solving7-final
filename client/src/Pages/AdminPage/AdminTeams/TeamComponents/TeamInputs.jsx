export function TeamInputs(){
    return([
        {
            type: "text",
            placeholder: "Please enter team name",
            className: "text-input-container",
            name: "teamName",
            validation: {
                required: "Please enter the name of the team"
            }
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