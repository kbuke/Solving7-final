export function EmailInputs(){
    return(
        [
            {
                type: "text",
                placeholder: "Please enter your email address",
                className: "email-input-container",
                name: "senderEmail",
                validation: {
                    required: "Please enter your email address"
                }
            },

            {
                type: "text",
                placeholder: "Please enter subject of your email",
                className: "email-input-container",
                name: "emailSubject",
                validation: {
                    required: "Please enter email subject"
                }
            },

            {
                type: "textarea",
                placeholder: "Please enter email message",
                className: "email-input-textarea",
                name: "emailMessage",
                validation: {
                    required: "Please enter email message"
                }
            }
        ]
    )
}