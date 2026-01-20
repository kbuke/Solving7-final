from resources.BaseResource import BaseResource
from models.PillarSustainabilityModel import PillarSustainabilityModel

class PillarSustainabilityList(BaseResource):
    model = PillarSustainabilityModel

    field_map = {
        "pillarId": "pillar_id",
        "sustainableId": "sustainable_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificPillarSustainability(BaseResource):
    model = PillarSustainabilityModel

    field_map = {
        "pillarId": "pillar_id",
        "sustainableId": "sustainable_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def delete(self, id):
        return self.delete_instance(id)