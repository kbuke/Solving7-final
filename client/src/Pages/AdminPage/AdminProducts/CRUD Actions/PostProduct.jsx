import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"

export function PostProduct({
    setAllProducts,
    setProductAction,
    isLoading,
    setIsLoading,
    pillarOptions
}){
    const newProductInputs = [
        {
            type: "text",
            placeholder: "Please enter product name",
            className: "text-input-container",
            name: "productName",
            validation: {
                required: "Please enter the name of the product"
            }
        },

        {
            type: "text",
            placeholder: "Please enter product image",
            className: "text-input-container",
            name: "productImg",
            validation: {
                required: "Please enter a url for the image"
            }
        },

        {
            type: "textarea",
            placeholder: "Please enter product information",
            className: "product-text-area",
            name: "productInfo",
            validation: {
                required: "Please enter information about the product."
            }
        }
    ]

    const handleProductPost = (formData) => {
        usePost({
            url: "/api/products",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newProduct) => {
                setAllProducts(prev => [...prev, newProduct])
                setProductAction(null)
            },
            setEndActionState: setProductAction
        })
    }

    return(
        <PopUp 
            instanceType={"Product"}
            inputArray={newProductInputs}
            handleInstanceSubmit={handleProductPost}
        />
    )
}