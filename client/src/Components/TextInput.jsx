import {FormGroup} from "./FormGroup"

export function TextInput({
    inputArray,
    errors,
    register
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
                        {...register(input.name, input.validation)}
                    />
                    : <input 
                        type={input?.type}
                        placeholder={input?.placeholder}
                        className={input?.className}
                        {...register(input.name, input.validation)}
                    />
                }

                <FormGroup errorMessage={errors?.[input.name]?.message}/>
            </div>
        ))
    )
}