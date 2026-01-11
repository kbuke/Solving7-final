import { AdminTable } from "./AdminTables";

export function AdminInstance({
    title,
    hiddenValue,
    fields,
    instanceButtons,
}) {
    return (
        <div className="border-b border-black p-4">

            {/* hidden input / value */}
            <AdminTable
                label={title}
                type="text"
                value={hiddenValue}
                isHidden
            />

            {/* visible title */}
            <h2 className="hidden md:block text-center font-bold text-2xl mb-2">
                {hiddenValue}
            </h2>

            {/* fields */}
            <div className="lg:grid lg:grid-cols-2 lg:justify-items-center lg:text-center">
                {fields.map(({ label, type, value }, index) => (
                    <AdminTable
                        key={index}
                        label={label}
                        type={type}
                        value={value}
                    />
                ))}
            </div>

            {/* buttons */}
            <div className="instance-button-div">
                {instanceButtons("edit-button", "Edit Instance")}
                {instanceButtons("delete-button", "Delete Instance")}
            </div>
        </div>
    );
}
