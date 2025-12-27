import { Buttons } from "./Buttons"
import { FormGroup } from "./FormGroup"

export function TextContainers({
    purpose, 
    textArray,
    register,
    errors,
    handleSubmit,
    onSubmit
}){
    return(
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="justify-center items-center flex flex-col"
        >
            <h1
                className="uppercase"
            >
                {purpose}
            </h1>
            {textArray.map((field, index) => {
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

            <Buttons 
                text={"Send Email"}
                buttonType={"Submit"}
            />
        </form>
    )
}