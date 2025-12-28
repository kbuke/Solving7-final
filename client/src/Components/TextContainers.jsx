import { Buttons } from "./Buttons"
import { FormGroup } from "./FormGroup"
import { LoadingIcon } from "./LoadingIcon"

export function TextContainers({
    purpose, 
    textArray,
    register,
    errors,
    handleSubmit,
    onSubmit,
    isLoading,
    error,
    errorText,
    completed,
    completedText
}){
    return(
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="justify-center items-center flex flex-col rounded-lg p-10
                bg-linear-to-br from-blue-200 to-blue-400
                text-black
            "
        >
            <h1
                className="uppercase"
            >
                {purpose}
            </h1>

            {error
                ? <div>
                    {errorText}
                </div>
                : null
            }

            {isLoading
                ? <LoadingIcon />
                :
                completed 
                ? <div className="w-full bg-green-700 rounded-lg text-center text-white mt-2 uppercase">
                    {completedText}
                </div>
                :
                textArray.map((field, index) => {
                    return(
                        <div key={index} className="border-b">
                            <div key={index} className="p-4 grid grid-cols-2 items-center">
                                <label className="p-4">
                                    {field?.label}
                                </label>

                                {field.type === "text"
                                    ? <input 
                                        className="focus:uppercase border pl-3 pr-3 w-100 rounded-lg text-center h-10"
                                        placeholder={field?.label}
                                        {...register(field.name, field.validation)}
                                    />
                                    : <textarea 
                                        className="focus: uppercase border pl-3 pr-3 w-100 rounded-lg h-60"
                                        placeholder={field?.label}
                                        {...register(field.name, field.validation)}
                                    />
                                }
                            </div>
                            <FormGroup errorMessage={errors?.[field.name]?.message}/>
                        </div>
                    )
                })}

            {completed 
                ? null
                :
                <Buttons 
                    text={"Send Email"}
                    buttonType={"Submit"}
                />
            }
        </form>
    )
}