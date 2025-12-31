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
    completedText,
    close,
    setState
}){
    return(
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="justify-center items-center flex flex-col rounded-lg p-10
                bg-linear-to-br from-blue-200 to-blue-400
                text-black opacity-100
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
                            <div key={index} className="
                                flex flex-col 
                                p-4 
                                items-center
                                w-full
                                lg:grid lg:grid-cols-[4fr_6fr]
                            ">
                                <label className="p-4">
                                    {field?.label}
                                </label>

                                {field.type === "text" || field.type === "password"
                                    ? <input 
                                        className="focus:uppercase border pl-3 pr-3 w-100 rounded-lg text-center h-10"
                                        placeholder={field?.label}
                                        {...register(field.name, field.validation)}
                                        type={field?.type}
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
            {close
                ? <div className="flex flex-row gap-5">
                    {completed
                        ? null 
                        : <Buttons 
                            text={purpose}
                            buttonType={"Submit"}
                        />
                    }
                    <Buttons 
                        text="Close"
                        buttonType={"Close"}
                        setState={setState}
                    />
                </div>

                : completed
                    ? null 
                    : <Buttons 
                        text={purpose}
                        buttonType={"Submit"}
                />
            }
        </form>
    )
}