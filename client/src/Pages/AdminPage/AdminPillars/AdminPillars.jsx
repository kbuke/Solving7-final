import { useState } from "react";
import { AdminInstance } from "../../../Components/AdminInstance";
import { AdminSections } from "../../../Components/AdminSections";
import { PostPillar } from "./CRUD Actions/PostPillar";

export function AdminPillars({ 
    appData, 
    instanceButtons ,
    isLoading,
    setIsLoading
}) {
    const [pillarAction, setPillarAction] = useState()

    const allPillars = appData?.allPillars;
    const setAllPillars = appData?.setAllPillars

    const currentPillars = allPillars.length

    const noOfPillarsAllowed = 7

    return (
        <>
            <AdminSections
                bgColour="bg-blue-200/40"
                sectionTitle="Pillars"
                currentInstances={currentPillars}
                maxInstances={noOfPillarsAllowed}
                setInstanceAction={setPillarAction}
                table={allPillars?.map((pillar) => (
                    <AdminInstance
                        key={pillar.id}
                        title="Pillar Name:"
                        hiddenValue={pillar.pillar}
                        instanceButtons={instanceButtons}
                        fields={[
                            {
                                label: "Pillar Intro:",
                                type: "text",
                                value: pillar.intro,
                            },
                            {
                                label: "Pillar Image:",
                                type: "img",
                                value: pillar.img,
                            },
                        ]}
                    />
                ))}
            />

            {pillarAction === "post"
                ? <PostPillar 
                    setAllPillars={setAllPillars}
                    setPillarAction={setPillarAction}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                : null
            }
        </>
    );
}
