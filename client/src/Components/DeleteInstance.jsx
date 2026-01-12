import { useForm } from "react-hook-form";

export function DeleteInstance({
    handleInstanceDelete,
    instanceName,
    instanceType
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
            <h1 className="admin-title">
                Delete {instanceName} from {instanceType}?
            </h1>

            <button className="bg-red-600 hover:-translate-y-2">
                Delete
            </button>
        </form>
    )
}