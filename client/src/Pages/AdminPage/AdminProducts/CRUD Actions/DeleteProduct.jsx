import { useDelete } from "../../../../Hooks/useDelete";
import { PopUp } from "../../../../Components/PopUp";

export function DeleteProduct({
    selectedProductId,
    setAllProducts,
    setProductAction,
    selectedProduct
}){
    const handleDeleteProduct = () => {
        useDelete(
            `/api/products/${selectedProductId}`,
            setAllProducts,
            selectedProductId,
            setProductAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Product"}
            handleInstanceSubmit={handleDeleteProduct}
            instanceName={selectedProduct?.name}
        />
    )
}