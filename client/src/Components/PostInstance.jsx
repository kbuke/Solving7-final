import { useForm } from "react-hook-form"
import { TextInput } from "./TextInput"
import { PopUpHeader } from "./PopUpHeader"
import { useState } from "react"

export function PostInstance({
    instanceType,
    inputArray,
    handleInstanceSubmit,
    setState,
    success,
    setSuccess
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
            className="form-popup"
        >
            <PopUpHeader 
                header={`Add New ${instanceType}`}
                setState={setState}
            />
            {success ?
                <>
                    <div
                        className="mt-4 text-center bg-green-600 rounded-2xl p-4 uppercase text-white"
                    >
                        Success New {instanceType} Posted!
                    </div>

                    <div
                        className="flex flex-row mt-4 gap-4 justify-center"
                    >
                        <button
                            onClick={() => setSuccess(false)}
                            className="bg-blue-600 w-40"
                        >
                            Add New {instanceType}
                        </button>

                        <button
                            onClick={() => setState("")}
                            className="bg-red-600 w-40"
                        >
                            Close
                        </button>
                    </div>
                </>
                :
                <>
                    <TextInput 
                        inputArray={inputArray}
                        errors={errors}
                        register={register}
                        control={control}
                    />

                    <button 
                        className="submit-button hover:-translate-y-2 self-center w-70 px-4"
                        type="submit"
                    >
                        Add New {instanceType}
                    </button>
                </>
            }
        </form>
    )
}