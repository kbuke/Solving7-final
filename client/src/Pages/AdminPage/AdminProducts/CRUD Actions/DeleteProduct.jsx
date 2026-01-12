import { useState } from "react";
import { useFetch } from "../../../../Hooks/useFetch";
import { useDelete } from "../../../../Hooks/useDelete";
import { PopUp } from "../../../../Components/PopUp";

export function DeleteProduct({
    selectedProductId,
    setAllProducts,
    setProductAction
}){
    const [selectedProduct, setSelectedProduct] = useState()

    useFetch(`/api/products/${selectedProductId}`, setSelectedProduct, [selectedProductId])

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