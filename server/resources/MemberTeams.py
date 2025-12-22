from resources.BaseResource import BaseResource
from models.MemberTeamsModel import MemberTeamsModel

class MemberTeamsList(BaseResource):
    model = MemberTeamsModel

    field_map = {
        "memberId" : "member_id",
        "teamId": "team_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificMemberTeamsList(BaseResource):
    model = MemberTeamsModel

    field_map = {
        "memberId" : "member_id",
        "teamId": "team_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def delete(self, id):
        return self.delete_instance(id)