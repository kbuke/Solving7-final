import { useForm, Controller } from "react-hook-form"
import Select from "react-select"
import { PopUpHeader } from "./PopUpHeader"
import { TextInput } from "./TextInput"

export function PostInstance({
    instanceType,
    inputArray,
    handleInstanceSubmit,
    setState,
    success,
    setSuccess
}) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    return (
        <div className="h-9/10 w-9/10 bg-white rounded flex flex-col lg:w-2/3">
            <PopUpHeader 
                header={`New ${instanceType}`}
                setState={setState}
            />

            <form
                onSubmit={handleSubmit(handleInstanceSubmit)}
                className="flex flex-col gap-4 p-6 overflow-y-auto"
            >
                <TextInput 
                    inputArray={inputArray}
                    errors={errors}
                    register={register}
                    control={control}
                />

                <button
                    type="submit"
                    className="bg-green-600 w-60 hover:-translate-y-2 duration-200 self-end lg:mt-4"
                >
                    Create {instanceType}
                </button>
            </form>
        </div>
    )
}
