import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import { ProductInputs } from "../ProductComponents/ProductInputs"

export function PostProduct({
    allProducts,
    setAllProducts,
    setProductAction,
    isLoading,
    setIsLoading
}){
    
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
            type={"post"}
            instanceType={"Product"}
            inputArray={ProductInputs({allProducts})}
            handleInstanceSubmit={handleProductPost}
            setState={setProductAction}
        />
    )
}