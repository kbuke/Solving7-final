from config import app, api, db

from resources.TeamMembers import TeamMemberList, SpecificTeamMember
from resources.Teams import TeamsList, SpecificTeam
from resources.MemberTeams import MemberTeamsList, SpecificMemberTeamsList
from resources.Pillars import PillarList, SpecificPillar

api.add_resource(TeamMemberList, "/members")
api.add_resource(SpecificTeamMember, "/members/<int:id>")

api.add_resource(TeamsList, "/teams")
api.add_resource(SpecificTeam, "/teams/<int:id>")

api.add_resource(MemberTeamsList, "/memberteams")
api.add_resource(SpecificMemberTeamsList, "/memberteams/<int:id>")

api.add_resource(PillarList, "/pillars")
api.add_resource(SpecificPillar, "/pillars/<int:id>")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)