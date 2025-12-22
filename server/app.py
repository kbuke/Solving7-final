from config import app, api, db

from resources.TeamMembers import TeamMemberList, SpecificTeamMember

api.add_resource(TeamMemberList, "/members")
api.add_resource(SpecificTeamMember, "/members/<int:id>")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)