import { useState } from "react"
import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import { useFetch } from "../../../../Hooks/useFetch"

export function PostProductPillar({
    allPillars,
    selectedProductId,
    setAllProductPillars,
    setProductPillarAction,
    isLoading,
    setIsLoading
}){
    const [selectedProduct, setSelectedProduct] = useState()

    useFetch(`/api/products/${selectedProductId}`, setSelectedProduct, [selectedProductId])

    const definedPillars = selectedProduct?.pillars

    // Filter pillars to ensure no duplicates for product
    const selectedPillarIds = new Set(
        definedPillars?.map(pillar => pillar.id)
    )

    const pillarOptions = allPillars
        ?.filter(pillar => !selectedPillarIds?.has(pillar.id))
        .map(pillar => ({
            label: pillar.pillar,
            value: pillar.id
        }))

    const newProductPillarInput = [
        {
            type: "select",
            label: "Please select pillar",
            name: "selectedPillar",
            options: pillarOptions,
            validation: {
                required: "Please select a pillar"
            }
        }
    ]

    const handleProductPillarPost = (formData) => {
        const payload = {
            pillarId: formData.selectedPillar.value,
            productId: selectedProductId
        }

        usePost({
            url: "/api/pillarproducts",
            body: payload,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newProductPillar) => {
                setAllProductPillars(prev => [...prev, newProductPillar])
                setProductPillarAction(null)
            },
            setEndActionState: setProductPillarAction
        })
    }

    return(
        <PopUp 
            instanceType={"Product Pillar"}
            inputArray={newProductPillarInput}
            handleInstanceSubmit={handleProductPillarPost}
        />
    )
}