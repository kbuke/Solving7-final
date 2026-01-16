export function NewsInputs(){
    return(
        [
            {
                type: "text",
                placeholder: "Please enter news title",
                className: "text-input-container",
                name: "newsTitle",
                validation: {
                    required: "Please enter the news articles title"
                }
            },

            {
                type: "text",
                placeholder: "Please enter an image for the article",
                className: "text-input-container",
                name: "newsImg",
                validation: {
                    required: "Please enter a link for the image"
                }
            },

            {
                type: "textarea",
                placeholder: "Please enter text for the news article",
                className: "news-textarea",
                name: "newsText",
                validation: {
                    required: "Please enter text for the article"
                }
            }
        ]
    )
}