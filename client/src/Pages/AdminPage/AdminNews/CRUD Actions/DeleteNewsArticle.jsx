import { PopUp } from "../../../../Components/PopUp"
import { useDelete } from "../../../../Hooks/useDelete"

export function DeleteNewsArticle({
    selectedNewsId,
    setAllNews,
    setNewsAction,
    selectedNews
}){
    const handleArticleDelete = () => {
        useDelete(
            `/api/news/${selectedNewsId}`,
            setAllNews,
            selectedNewsId,
            setNewsAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Article"}
            handleInstanceSubmit={handleArticleDelete}
            instanceName={selectedNews?.title}
        />
    )
}