import { useState } from "react"
import { PopUp } from "../../../../Components/PopUp"
import { PostProductPillar } from "./PostProductPillar"
import { DeleteProductPillar } from "./DeleteProductPillar"

export function ProductPillars({
    appData,
    selectedProductId,
    setSelectedProductId,
    productName,
    selectedProduct
}){
    const [productPillarAction, setProductPillarAction] = useState()
    const [pillarId, setPillarId] = useState()

    const allPillars = appData?.allPillars

    const allProductPillars = appData?.allProductPillars
    const setAllProductPillars = appData?.setAllProductPillars

    const productPillars = selectedProduct?.pillars
    
    return(
        <>
            <PopUp 
                type={"relational"}
                relationArray={productPillars}
                relationKey={"pillar"}
                instanceName={`${productName}'s Pillars`}
                setRelationalId={setPillarId}
                setRelationAction={setProductPillarAction}
            />

            {productPillarAction === "post"
                ? <PostProductPillar 
                    allPillars={allPillars}
                    selectedProductId={selectedProductId}
                    setAllProductPillars={setAllProductPillars}
                    setProductPillarAction={setProductPillarAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                />
                : productPillarAction === "delete"
                ? <DeleteProductPillar 
                    pillarId={pillarId}
                    productId={selectedProductId}
                    allProductPillars={allProductPillars}
                    setAllProductPillars={setAllProductPillars}
                    setPillarProductAction={setProductPillarAction}
                />
                : null
            }
        </>
    )
}