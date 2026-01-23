import { useDelete } from "../../../../Hooks/useDelete";
import { PopUp } from "../../../../Components/PopUp";

export function DeleteTeam({
    selectedTeamId,
    setAllTeams,
    setTeamAction,
    selectedTeam
}){

    const handleDeleteTeam = () => {
        useDelete(
            `/api/teams/${selectedTeamId}`,
            setAllTeams,
            selectedTeamId,
            setTeamAction
        )
    }

    return(
        <PopUp 
            type={"delete"}
            instanceType={"Team"}
            handleInstanceSubmit={handleDeleteTeam}
            instanceName={selectedTeam?.name}
            setState={setTeamAction}
        />
    )
}