export function UniqueInput({
    inputType,
    allInstances,
    field,
    currentId = null
}) {
    return {
        required: `${inputType} is required`,
        validate: value => {
            if (!value) return true;

            const normalizedValue = value.trim().toLowerCase();

            const exists = allInstances?.some(instance => {
                if (currentId && instance.id === currentId) return false;

                return (
                    instance?.[field]
                        ?.trim()
                        ?.toLowerCase() === normalizedValue
                );
            });

            return (
                !exists ||
                `${value} is an already registered ${inputType}`
            );
        }
    };
}



