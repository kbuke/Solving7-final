import { useState } from "react";
import { useFetch } from "../../../../Hooks/useFetch";
import { useDelete } from "../../../../Hooks/useDelete";
import { PopUp } from "../../../../Components/PopUp";

export function DeleteTeam({
    selectedTeamId,
    setAllTeams,
    setTeamAction
}){
    const [selectedTeam, setSelectedTeam] = useState()

    useFetch(`/api/teams/${selectedTeamId}`, setSelectedTeam, [selectedTeamId])

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
        />
    )
}