import { PopUp } from "../../../../Components/PopUp"
import { ProductInputs } from "../ProductComponents/ProductInputs"
import { usePatch } from "../../../../Hooks/usePatch"

export function PatchProduct({
    selectedProductId,
    setAllProducts,
    setProductAction,
    selectedProduct
}){
    const patchPillarObject = [
        {
            key: "productName",
            accessor: "name"
        },

        {
            key: "productImg",
            accessor: "img",
        },

        {
            key: "productInfo",
            accessor: "info"
        }
    ]

    const handleProductEdit = (formData) => {
        console.log(formData)
        const patchData = {
            productName: formData?.productName,
            productImg: formData?.productImg,
            productInfo: formData?.productInfo
        }

        usePatch(
            patchData, `/api/products/${selectedProductId}`,
            selectedProductId, setAllProducts, setProductAction
        )
    }

    return(
        <PopUp 
            type={"patch"}
            instanceType={"Product"}
            instanceName={selectedProduct?.name}
            patchReset={patchPillarObject}
            selectedInstance={selectedProduct}
            inputArray={ProductInputs()}
            handleInstanceSubmit={handleProductEdit}
        />
    )
}