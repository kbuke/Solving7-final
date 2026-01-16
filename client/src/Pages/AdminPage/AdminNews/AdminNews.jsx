import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { AdminSections } from "../../../Components/AdminSections";
import { AdminInstance } from "../../../Components/AdminInstance";
import { PostNewsArticle } from "./CRUD Actions/PostNewsArticle";
import { PatchNewsArticle } from "./CRUD Actions/PatchNewsArticle";

export function AdminNews({
    appData
}){
    const [newsAction, setNewsAction] = useState()
    const [selectedNewsId, setSelectedNewsId] = useState()
    const [selectedNews, setSelectedNews] = useState()

    useFetch(`/api/news/${selectedNewsId}`, setSelectedNews, [selectedNewsId])

    const allNews = appData?.allNews
    const setAllNews = appData?.setAllNews

    return(
        <>
            <AdminSections 
                bgColour="bg-blue-200/40"
                sectionTitle={"News"}
                setInstanceAction={setNewsAction}
                table={allNews.map((news) => (
                    <AdminInstance 
                        key={news.id}
                        title="News Title: "
                        hiddenValue={news.title}
                        setInstanceAction={setNewsAction}
                        setSelectedId={setSelectedNewsId}
                        chosenId={news?.id}
                        fields={[
                            {
                                label: "News Img",
                                type: "text",
                                value: news?.img
                            },

                            {
                                label: "News Text",
                                type: "text",
                                value: news?.text
                            },

                            {
                                label: "News Date",
                                type: "text",
                                value: news?.posted
                            }
                        ]}
                    />
                ))}
            />

            {newsAction === "post"
                ? <PostNewsArticle 
                    setAllNews={setAllNews}
                    setNewsAction={setNewsAction}
                    isLoading={appData?.isLoading}
                    setIsLoading={appData?.setIsLoading}
                />
                : newsAction === "patch"
                ? <PatchNewsArticle 
                    selectedNewsId={selectedNewsId}
                    setAllNews={setAllNews}
                    setNewsAction={setNewsAction}
                    selectedNews={selectedNews}
                />
                : null
            }
        </>
    )
}