from resources.BaseResource import BaseResource
from models.TeamModel import TeamModel

class TeamsList(BaseResource):
    model = TeamModel

    field_map = {
        "teamName": "name",
        "teamIntro": "intro"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificTeam(BaseResource):
    model = TeamModel

    field_map = {
        "teamName": "name",
        "teamIntro": "intro"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)