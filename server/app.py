from config import app, api, db

from resources.TeamMembers import TeamMemberList, SpecificTeamMember
from resources.Teams import TeamsList, SpecificTeam
from resources.MemberTeams import MemberTeamsList, SpecificMemberTeamsList
from resources.Pillars import PillarList, SpecificPillar
from resources.UnSustainability import UnSustainabilityList, SpecificUnSustainabilityGoal
from resources.Products import ProductsList, SpecificProduct
from resources.Intro import SpecificIntro
from resources.Email import EmailList
from resources.PillarProducts import PillarProductsList, SpecificPillarProductsList
from resources.Socials import SocialsList, SpecificSocial

from resources.Login import Login
from resources.Logout import Logout
from resources.CheckSession import CheckSession

api.add_resource(TeamMemberList, "/members")
api.add_resource(SpecificTeamMember, "/members/<int:id>")

api.add_resource(TeamsList, "/teams")
api.add_resource(SpecificTeam, "/teams/<int:id>")

api.add_resource(MemberTeamsList, "/memberteams")
api.add_resource(SpecificMemberTeamsList, "/memberteams/<int:id>")

api.add_resource(PillarList, "/pillars")
api.add_resource(SpecificPillar, "/pillars/<int:id>")

api.add_resource(UnSustainabilityList, "/sustainabilitygoals")
api.add_resource(SpecificUnSustainabilityGoal, "/sustainabilitygoals/<int:id>")

api.add_resource(ProductsList, "/products")
api.add_resource(SpecificProduct, "/products/<int:id>")

api.add_resource(SpecificIntro, "/intro/<int:id>")

api.add_resource(EmailList, "/emails")

api.add_resource(PillarProductsList, "/pillarproducts")
api.add_resource(SpecificPillarProductsList, "/pillarproducts/<int:id>")

api.add_resource(SocialsList, "/socials")
api.add_resource(SpecificSocial, "/socials/<int:id>")

api.add_resource(CheckSession, "/session")

api.add_resource(Login, "/login")

api.add_resource(Logout, "/logout")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)