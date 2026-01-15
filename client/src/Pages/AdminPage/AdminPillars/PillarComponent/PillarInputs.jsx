export function PillarInputs(){
    return(
        [
            {
                type: "text",
                placeholder: "Please enter pillar goal",
                className: "text-input-container",
                name: "pillar",
                validation: {
                    required: "Please enter the pillar title."
                }
            },

            {
                type: "textarea",
                placeholder: "Please enter pillars information",
                className: "pillar-text-area",
                name: "pillarIntro",
                validation: {
                    required: "Please enter pillar intro"
                }
            },

            {
                type: "text",
                placeholder: "Please enter image link for pillar",
                className: "text-input-container",
                name: "pillarImg",
                validation: {
                    required: "Please enter image for pillar"
                }
            }
        ]
    )
}