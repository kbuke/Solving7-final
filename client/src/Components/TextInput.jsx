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
                className="mb-4 border-b border-white"
            >
                {input?.type === "textarea"
                    ? <textarea 
                        className={input?.className}
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
                    />
                    : <div>
                        <label>
                            {input.label}
                        </label>
                        <input 
                            type={input?.type}
                            placeholder={input?.placeholder}
                            className={input?.className}
                            {...register(input.name, input.validation)}
                        />
                    </div>
                }

                <FormGroup errorMessage={errors?.[input.name]?.message}/>
            </div>
        ))
    )
}