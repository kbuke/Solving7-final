import {FormGroup} from "./FormGroup"
import { Controller } from "react-hook-form"
import ReactSelect from "react-select"

export function TextInput({
    inputArray,
    errors,
    register,
    control
}){
    return(
        inputArray.map((input, index) => (
            <div 
                key={index}
                className="self-center w-full border-b py-2 border-gray-500/60"
            >
                <p
                    className="text-[14px] text-gray-500 uppercase"
                >
                    {input?.placeholder}
                </p>
                {input?.type === "textarea"
                    ? <textarea 
                        className="textarea-input"
                        placeholder={input?.placeholder}
                        {...register(input.name, input.validation)}
                    />
                    : input?.type === "select"
                    ? <Controller 
                        name={input.name}
                        control={control}
                        rules={{required: "Please select a value"}}
                        render = {({field}) => (
                            <ReactSelect {...field} options={input.options} onChange={field.onChange} className=""/>
                        )}
                        className="z-10"
                    />
                    : <div>
                        <label>
                            {input.label}
                        </label>
                        <input 
                            type={input?.type}
                            placeholder={input?.placeholder}
                            className="text-input"
                            {...register(input.name, input.validation)}
                        />
                    </div>
                }

                <FormGroup errorMessage={errors?.[input.name]?.message}/>
            </div>
        ))
    )
}