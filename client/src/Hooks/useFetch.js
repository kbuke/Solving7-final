import { useEffect } from "react";

export function useFetch(url, setState, dependancies=[]){
    console.log(url)
    useEffect(() => {
        const controller = new AbortController()

        fetch(url, {signal: controller.signal})
        .then(r => {
            console.log(r)
            if(r.ok){
                return r.json()
            }
            throw r
        })
        .then(instances => setState(instances))

        .catch(e => {
            if(e.name === "AbortError") return;
            console.error("Fetch error:", e);
        })
        return () => {
            controller.abort()
        }
    }, [url, ...dependancies])
}