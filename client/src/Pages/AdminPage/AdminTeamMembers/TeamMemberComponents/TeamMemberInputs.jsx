export function TeamMemberInputs(){
    return([
        {
            type: "text",
            placeholder: "Please enter member name",
            className: "text-input-container",
            name: "name",
            validation:{
                required: "Please enter team member name"
            }
        },

        {
            type: "text",
            placeholder: "Please enter member image",
            className: "text-input-container",
            name: "img",
            validation: {
                required: "Please enter a link to image"
            }
        },

        {
            type: "textarea",
            placeholder: "Please enter your info",
            className: "member-text-area",
            name: "intro",
            validation: {
                required: "Please enter information about you."
            }
        },

        {
            type: "text",
            placeholder: "Please enter an email",
            className: "text-input-container",
            name: "email",
            validation: {
                required: "Please enter your email address"
                // Ensure it ends in solving7green.com
            }
        },

        {
            type: "password",
            placeholder: "Please enter a password",
            className: "text-input-container",
            name: "userPassword",
            validation: {
                required: "Please enter your new password"
            }
        }
    ])
}