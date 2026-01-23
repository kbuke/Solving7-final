import { useForm } from "react-hook-form";
import { PopUpHeader } from "./PopUpHeader";

export function DeleteInstance({
    handleInstanceDelete,
    instanceName,
    instanceType,
    setState
}){

    const {
        handleSubmit,
        formState: {errors}
    } = useForm()

    return(
        <form 
            className="admin-form"
            onSubmit={handleSubmit(handleInstanceDelete)}
        >
            <PopUpHeader 
                header={`Delete ${instanceName} from ${instanceType}s?`}
                setState={setState}
            />

            <button className="bg-red-600 hover:-translate-y-2 mt-10 self-end">
                Delete
            </button>
        </form>
    )
}