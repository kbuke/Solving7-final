import { useEffect } from "react";
import { TextInput } from "./TextInput";
import { useForm } from "react-hook-form";

export function PatchInstance({
    instanceType,
    instanceName,
    patchReset,
    inputArray,
    selectedInstance,
    handleInstancePatch
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
            <h1
                className="admin-title"
            >
                Edit {instanceName}
            </h1>

            <TextInput 
                inputArray={inputArray}
                errors={errors}
                register={register}
                control={control}
            />

            <button className="submit-button">
                Edit {instanceType}
            </button>
        </form>
    )
}