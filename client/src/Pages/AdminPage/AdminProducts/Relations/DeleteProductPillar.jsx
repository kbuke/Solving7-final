import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteProductPillar({
    pillarId,
    productId,
    allProductPillars,
    setAllProductPillars,
    setPillarProductAction
}){
    const selectedProductPillar = allProductPillars?.find(productPillar => (
        productPillar.pillar_id === pillarId &&
        productPillar.product_id === productId
    ))

    const handleDeleteProductPillar = () => {
        useDelete(
            `/api/pillarproducts/${selectedProductPillar?.id}`,
            setAllProductPillars,
            selectedProductPillar?.id,
            setPillarProductAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Pillar-Product"}
            handleInstanceSubmit={handleDeleteProductPillar}
            instanceName={""}
        />
    )
}