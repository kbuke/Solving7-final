import { useState } from "react";
import { AdminInstance } from "../../../Components/AdminInstance";
import { AdminSections } from "../../../Components/AdminSections";
import { PostProduct } from "./CRUD Actions/PostProduct";
import { PostProductPillar } from "./Relations/PostProductPillar";
import { DeleteProduct } from "./CRUD Actions/DeleteProduct";

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
                            setInstanceAction={setProductAction}
                            setSelectedId={setSelectedProductId}
                            chosenId={product?.id}
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
                : productAction === "delete"
                ? <DeleteProduct 
                    selectedProductId={selectedProductId}
                    setAllProducts={setAllProducts}
                    setProductAction={setProductAction}
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