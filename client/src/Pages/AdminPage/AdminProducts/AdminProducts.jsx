import { useState } from "react";
import { AdminInstance } from "../../../Components/AdminInstance";
import { AdminSections } from "../../../Components/AdminSections";
import { PostPillar } from "../AdminPillars/CRUD Actions/PostPillar";
import { PostProduct } from "./CRUD Actions/PostProduct";

export function AdminProducts({ appData, instanceButtons }) {
    const [productAction, setProductAction] = useState()

    const allProducts = appData?.allProducts
    const setAllProducts = appData?.setAllProducts

    const allPillars = appData?.allPillars

    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading

    const pillarOptions = allPillars?.map(pillar => ({
        label: pillar?.pillar,
        value: pillar?.id
    }))

    return (
        <>
            <AdminSections
                bgColour="bg-white"
                sectionTitle="Products"
                setInstanceAction={setProductAction}
                table={allProducts?.map((product) => (
                    <AdminInstance
                        key={product.id}
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
                    />
                ))}
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
        </>
    );
}