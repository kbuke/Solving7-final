from resources.BaseResource import BaseResource
from models.PillarModel import PillarModel

class PillarList(BaseResource):
    model = PillarModel

    field_map = {
        "pillar": "pillar",
        "pillarIntro": "intro",
        "pillarImg": "img"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificPillar(BaseResource):
    model = PillarModel

    field_map = {
        "pillar": "pillar",
        "pillarIntro": "intro",
        "pillarImg": "img"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)