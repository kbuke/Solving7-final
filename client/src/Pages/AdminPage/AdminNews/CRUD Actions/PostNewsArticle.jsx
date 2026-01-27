import { PopUp } from "../../../../Components/PopUp"
import { usePost } from "../../../../Hooks/usePost"
import { NewsInputs } from "../News Component/NewsInputs"

export function PostNewsArticle({
    setAllNews,
    setNewsAction,
    isLoading,
    setIsLoading
}){
    const handleNewsPost = (formData) => {
        usePost({
            url: "/api/news",
            body: formData,
            credentials: "include",
            setLoading: setIsLoading,
            onSuccess: (newArticle) => {
                setAllNews(prev => [...prev, newArticle])
                setNewsAction(null)
            },
            setEndActionState: setNewsAction
        })
    }

    return(
        <PopUp 
            type={"post"}
            instanceType={"Article"}
            inputArray={NewsInputs()}
            handleInstanceSubmit={handleNewsPost}
            setState={setNewsAction}
        />
    )
}