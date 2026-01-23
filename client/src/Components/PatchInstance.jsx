import { useEffect } from "react";
import { TextInput } from "./TextInput";
import { useForm } from "react-hook-form";
import { PopUpHeader } from "./PopUpHeader";

export function PatchInstance({
    instanceType,
    instanceName,
    patchReset,
    inputArray,
    selectedInstance,
    handleInstancePatch,
    setState
}){
    const {
            register,
            handleSubmit,
            control,
            formState: {errors},
            reset
        } = useForm()

    useEffect(() => {
        if (!selectedInstance) return

        const resetValues = {}

        patchReset.forEach(({ key, accessor }) => {
            resetValues[key] = selectedInstance[accessor]
        })

        reset(resetValues)
    }, [selectedInstance, patchReset, reset])


    return(
        <form
            onSubmit={handleSubmit(handleInstancePatch)}
            className="admin-form"
        >
            <PopUpHeader 
                header={`Edit ${instanceType}: ${instanceName}`}
                setState={setState}
            />

            <div className="flex flex-col items-center mt-4 mb-4 w-full">
            <TextInput 
                inputArray={inputArray}
                errors={errors}
                register={register}
                control={control}
            />
            </div>

            <button className="submit-button">
                Edit {instanceType}
            </button>
        </form>
    )
}