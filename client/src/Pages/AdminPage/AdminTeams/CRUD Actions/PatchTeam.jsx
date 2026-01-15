import { PopUp } from "../../../../Components/PopUp"
import { usePatch } from "../../../../Hooks/usePatch"
import { TeamInputs } from "../TeamComponents/TeamInputs"

export function PatchTeam({
    selectedTeamId,
    setAllTeams,
    setTeamAction,
    selectedTeam
}){
    const patchTeamObject = [
        {
            key: "teamName",
            accessor: "name"
        },

        {
            key: "teamIntro",
            accessor: "intro"
        }
    ]

    const handleTeamEdit = (formData) => {
        const patchData = {
            teamName: formData?.teamName,
            teamIntro: formData?.teamIntro
        }

        usePatch(
            patchData, `/api/teams/${selectedTeamId}`,
            selectedTeamId, setAllTeams, setTeamAction
        )
    }

    return(
        <PopUp 
            type={"patch"}
            instanceType={"Team"}
            instanceName={selectedTeam?.name}
            patchReset={patchTeamObject}
            selectedInstance={selectedTeam}
            inputArray={TeamInputs()}
            handleInstanceSubmit={handleTeamEdit}
        />
    )
}