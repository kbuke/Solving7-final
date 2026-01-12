import { useForm } from "react-hook-form"
import { TextInput } from "./TextInput"

export function PostInstance({
    instanceType,
    inputArray,
    handleInstanceSubmit
}){
    const {
        register,
        handleSubmit,
        control,
        formState: {errors}
    } = useForm()

    return(
        <form 
            onSubmit={handleSubmit(handleInstanceSubmit)}
            className="bg-white h-170 w-83 rounded flex flex-col justify-center items-center"
        >
            <h1 className="font-bold uppercase text-red-600 text-2xl mb-4">
                Add New {instanceType}
            </h1>

            <TextInput 
                inputArray={inputArray}
                errors={errors}
                register={register}
                control={control}
            />

            <button className="submit-button hover:-translate-y-2">
                Add New {instanceType}
            </button>
        </form>
    )
}