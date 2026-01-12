import { useState } from "react";
import { AdminInstance } from "../../../Components/AdminInstance";
import { AdminSections } from "../../../Components/AdminSections";
import { PostProduct } from "./CRUD Actions/PostProduct";
import { PostProductPillar } from "./Relations/PostProductPillar";

export function AdminProducts({ appData, instanceButtons }) {
    const [productAction, setProductAction] = useState()
    const [productPillarAction, setProductPillarAction] = useState()
    const [selectedProductId, setSelectedProductId] = useState()

    const allProducts = appData?.allProducts
    const setAllProducts = appData?.setAllProducts

    const allPillars = appData?.allPillars

    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading

    const allProductPillars = appData?.allProductPillars
    const setAllProductPillars = appData?.setAllProductPillars

    return (
        <>
            <AdminSections
                bgColour="bg-white"
                sectionTitle="Products"
                setInstanceAction={setProductAction}
                table={allProducts?.map((product) => {
                    const pillarRelation = product?.pillars
                    return(
                        <AdminInstance
                            key={product.id}
                            id={product.id}
                            title="Product Name:"
                            hiddenValue={product.name}
                            instanceButtons={instanceButtons}
                            fields={[
                                {
                                    label: "Product Info:",
                                    type: "text",
                                    value: product.info,
                                },
                                {
                                    label: "Product Image:",
                                    type: "img",
                                    value: product.img,
                                },
                            ]}
                            relational={"Product Pillars"}
                            relationalArray={pillarRelation}
                            relationalKey="pillar"
                            setRelationAction={setProductPillarAction}
                            setSelectedId={setSelectedProductId}
                        />
                    )
                })}
            />

            {productAction === "post"
                ? <PostProduct 
                    setAllProducts={setAllProducts}
                    setProductAction={setProductAction}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                : null
            }

            {productPillarAction === "post"
                ? <PostProductPillar 
                    allPillars={allPillars}
                    selectedProductId={selectedProductId}
                    setAllProductPillars={setAllProductPillars}
                    setProductPillarAction={setProductPillarAction}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                : null
            }
        </>
    );
}