export async function usePost(
    url,
    information,
    prevState,
    setState,
    setPosting,
    setError,
    setCompleted,
    setEndActionState
) {
    setPosting(true)
    setError(false)
    setCompleted(false)

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(information)
        })

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData?.error || "Something went wrong")
        }

        const newAddition = await response.json()

        setState([...prevState, newAddition])

        if (setEndActionState) {
            setEndActionState(null)
        }

        setCompleted(true)

    } catch (err) {
        console.error(err)
        setError(true)

    } finally {
        setPosting(false)
    }
}
