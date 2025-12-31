import { useEffect, useState } from "react"
import { AdminTitle } from "../../../Components/AdminTitle"
import { Tables } from "../../../Components/Tables"
import { PopUpContainer } from "../../../Components/PopUp"
import { usePost } from "../../../Hooks/usePost"
import { useFetch } from "../../../Hooks/useFetch"
import { usePatch } from "../../../Hooks/usePatch"

export function AdminPillars({
    appData
}){

    const [pillarAction, setPillarAction] = useState()
    const [selectedPillarId, setSelectedPillarId] = useState()
    const [postPillarError, setPostPillarError] = useState()
    const [postPillarSuccess, setPostPillarSuccess] = useState()
    const [selectedPillar, setSelectedPillar] = useState()

    const allPillars = appData?.allPillars
    const setAllPillars = appData?.setAllPillars
    const register = appData?.register
    const errors = appData?.errors
    const handleSubmit = appData?.handleSubmit
    const reset = appData?.reset
    const control = appData?.control
    const isLoading = appData?.isLoading

    useFetch(`/api/pillars/${selectedPillarId}`, setSelectedPillar, [selectedPillarId, allPillars])

    // Handle reseting containers if posting
    useEffect(() => {
        if(!pillarAction) return 

        if(pillarAction === "Post"){
            reset({
                pillar: "",
                pillarIntro: "",
                pillarImg: ""
            })
        }
    }, [pillarAction])

    // Place existing values if patching 
    useEffect(() => {
        if(selectedPillar){
            reset({
                pillar: selectedPillar.pillar,
                pillarIntro: selectedPillar.intro,
                pillarImg: selectedPillar.img
            })
        }
    }, [selectedPillar, reset])

    const pillarHeadings = [
        {
            id: "ID", accessor: "id"
        },

        {
            header: "Pillar", accessor: "pillar"
        },

        {
            header: "Info", accessor: "intro"
        },

        {
            header: "Image", accessor: "img",
            render: (value) => <img src={value} alt = "" width={80}/>
        }
    ]

    const pillarInputs = [
        {
            label: "Please enter Pillar-Title",
            type: "text",
            name: "pillar",
            validation: {
                required: "Please enter a pillar title",
                validate: value => {
                    const exists = allPillars.some(
                        pillar => 
                            pillar?.pillar.toLowerCase() === value?.toLowerCase() &&
                            pillar.id !== selectedPillarId
                    )
                    return !exists || `${value} is an already registered pillar`
                }
            }
        },

        {
            label: "Please enter Pillar Info",
            type: "textarea",
            name: "pillarIntro",
            validation: {
                required: "Please enter pillar information"
            }
        },

        {
            label: "Please enter Pillar Image",
            type: "text",
            name: "pillarImg",
            validation: {
                required: "Please enter pillar image"
            }
        }
    ]

    const handlePillarPost = (formData) => {
        usePost({
            url: "/api/pillars",
            body: formData,
            onSuccess: (newPillar) => {
                setAllPillars(prev => [...prev, newPillar])
            }
        })
    }

    console.log(pillarAction)

    const handlePillarPatch = (formData) => {
        console.log(formData)
        const patchData = {
            pillar: formData.pillar,
            pillarIntro: formData.pillarIntro,
            pillarImg: formData.pillarImg
        }

        usePatch(
            patchData, `/api/pillars/${selectedPillarId}`,
            selectedPillarId, setAllPillars,
            setPillarAction
        )
    }

    return(
        <div>
            <AdminTitle 
                sectionHeading="Pillars"
                setState={setPillarAction}
            />

            <Tables 
                tableHeadings={pillarHeadings}
                dataArray={allPillars}
                setTableAction={setPillarAction}
                setSelectedCategoryId={setSelectedPillarId}
            />

            {pillarAction
                ? <PopUpContainer 
                    purpose = {pillarAction==="Post"
                        ? "Post Pillar"
                        : "Patch Pillar"
                    }
                    dataArray={pillarInputs}
                    register={register}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    onSubmit={(formData) => {
                        if(pillarAction === "Post"){
                            handlePillarPost(formData)
                        } else if (pillarAction === "Edit"){
                            handlePillarPatch(formData)
                        }
                    }}
                    isLoading={isLoading}
                    error={postPillarError}
                    errorText="Failed to post pillar"
                    completed={postPillarSuccess}
                    completedText="Posted new Pillar"
                    close={true}
                    setStateAction={setPillarAction}
                />
                : null
            }
        </div>
    )
}