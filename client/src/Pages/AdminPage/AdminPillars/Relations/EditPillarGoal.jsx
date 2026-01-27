import { useState, useEffect } from "react";
import { usePatch } from "../../../../Hooks/usePatch"; // renamed

export function EditPillarGoal({ 
    goalId, 
    pillarId, 
    allSustainablePillars, 
    setAllSustainablePillars, 
    setGoalAction 
}) {
    const initialRelationship = allSustainablePillars?.find(
        sp => sp.pillar_id === pillarId && sp.sustainable_id === goalId
    );

    const [relationshipText, setRelationshipText] = useState(initialRelationship?.relationship ?? "");

    useEffect(() => {
        setRelationshipText(initialRelationship?.relationship ?? "");
    }, [initialRelationship]);

    if (!initialRelationship) return <p>No relationship found for this goal.</p>;

    const handleSave = (e) => {
        e.preventDefault();

        console.log("patching", relationshipText);

        const patchPayload = {
            pillarId: pillarId,
            sustainableId: goalId,
            relationship: relationshipText
        };

        usePatch(
            patchPayload,
            `/api/pillargoals/${initialRelationship.id}`,
            initialRelationship.id,
            setAllSustainablePillars,
            setGoalAction
        );
    };

    return (
        <form
    className="p-6 bg-white rounded shadow-lg w-full max-w-md"
    onSubmit={handleSave} // <- event is automatically passed
>
    <h3 className="text-lg font-semibold mb-2">Edit Relationship</h3>
    
    <textarea
        className="w-full p-2 border rounded mb-4"
        rows={4}
        value={relationshipText}
        onChange={(e) => setRelationshipText(e.target.value)}
    />

    <div className="flex justify-end gap-2">
        <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => setGoalAction(null)}
        >
            Cancel
        </button>
        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
        >
            Save
        </button>
    </div>
</form>

    );
}


