import { useState } from "react";
import { AdminInstance } from "../../../Components/AdminInstance";
import { AdminSections } from "../../../Components/AdminSections";
import { PostProduct } from "./CRUD Actions/PostProduct";
import { DeleteProduct } from "./CRUD Actions/DeleteProduct";
import { PatchProduct } from "./CRUD Actions/PatchProduct";
import { useFetch } from "../../../Hooks/useFetch";
import { ProductPillars } from "./Relations/ProductPillars";

export function AdminProducts({ 
    appData,
    openRelation,
    setOpenRelation
}) {
    const [productAction, setProductAction] = useState()
    const [selectedProduct, setSelectedProduct] = useState()
    const [selectedProductId, setSelectedProductId] = useState()

    const allProducts = appData?.allProducts
    const setAllProducts = appData?.setAllProducts

    const isLoading = appData?.isLoading
    const setIsLoading = appData?.setIsLoading

    useFetch(`/api/products/${selectedProductId}`, setSelectedProduct, [selectedProductId])

    return (
        <>
            <AdminSections
                bgColour="white"
                sectionTitle="Products"
                setInstanceAction={setProductAction}
                table={allProducts?.map((product, index) => {
                    return(
                        <AdminInstance
                            key={product.id}
                            index={index}
                            total={allProducts.length}
                            title="Product Name:"
                            hiddenValue={product.name}
                            instanceImg={product.img}
                            setInstanceAction={setProductAction}
                            setSelectedId={setSelectedProductId}
                            chosenId={product?.id}
                            fields={[
                                {
                                    label: "Product Info:",
                                    type: "text",
                                    value: product.info,
                                }
                            ]}
                            relational={"Product Pillars"}
                            setSelectedRelation={setOpenRelation}
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
                : productAction === "patch"
                ? <PatchProduct 
                    selectedProductId={selectedProductId}
                    setAllProducts={setAllProducts}
                    setProductAction={setProductAction}
                    selectedProduct={selectedProduct}
                />
                : null
            }

            {openRelation === "Product Pillars" && selectedProduct
                ? <ProductPillars 
                    appData={appData}
                    selectedProductId={selectedProductId}
                    setSelectedProductId={setSelectedProductId}
                    productName={selectedProduct?.name}
                    selectedProduct={selectedProduct}
                />
                : null
            }
        </>
    );
}