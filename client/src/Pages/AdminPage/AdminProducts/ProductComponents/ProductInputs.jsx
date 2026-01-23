import { RequiredInput } from "../../../../Components/RequiredInput";
import { UniqueInput } from "../../../../Components/UniqueInput";

export function ProductInputs({
    allProducts,
    currentId
}){
    return([
        {
            type: "text",
            placeholder: "Please enter product name",
            className: "text-input-container",
            name: "productName",
            validation: UniqueInput({
                inputType: "Product",
                allInstances: allProducts,
                field:"name",
                currentId: currentId? currentId : null
            })
        },

        {
            type: "text",
            placeholder: "Please enter product image",
            className: "text-input-container",
            name: "productImg",
            validation: RequiredInput("Produt Image")
        },

        {
            type: "textarea",
            placeholder: "Please enter product information",
            className: "product-text-area",
            name: "productInfo",
            validation: RequiredInput("Product Information")
        }
    ])
}