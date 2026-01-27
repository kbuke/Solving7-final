import { PopUp } from "../../../../Components/PopUp"
import { usePatch } from "../../../../Hooks/usePatch"
import { NewsInputs } from "../News Component/NewsInputs"

export function PatchNewsArticle({
    selectedNewsId,
    setAllNews,
    setNewsAction,
    selectedNews
}){
    const patchNewsObject = [
        {
            key: "newsTitle",
            accessor: "title"
        },

        {
            key: "newsImg",
            accessor: "img"
        },

        {
            key: "newsText",
            accessor: "text"
        }
    ]

    const handleArticlePatch = (formData) => {
        const patchData = {
            newsTitle: formData.newsTitle,
            newsImg: formData.newsImg,
            newsText: formData.newsText
        }

        usePatch(
            patchData, `/api/news/${selectedNewsId}`,
            selectedNewsId, setAllNews, setNewsAction
        )
    }

    return(
        <PopUp 
            type={"patch"}
            instanceType={"Article"}
            instanceName={selectedNews?.title}
            patchReset={patchNewsObject}
            selectedInstance={selectedNews}
            inputArray={NewsInputs()}
            handleInstanceSubmit={handleArticlePatch}
            setState={setNewsAction}
        />
    )
}