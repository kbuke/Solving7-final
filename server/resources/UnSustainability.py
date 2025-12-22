from resources.BaseResource import BaseResource
from models.UnSustainabilityModel import UnSustainabilityModel

class UnSustainabilityList(BaseResource):
    model = UnSustainabilityModel

    field_map = {
        "unGoal": "goal",
        "unGoalInfo": "info"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificUnSustainabilityGoal(BaseResource):
    model = UnSustainabilityModel

    field_map = {
        "unGoal": "goal",
        "unGoalInfo": "info"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)