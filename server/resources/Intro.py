from resources.BaseResource import BaseResource
from models.IntroModel import IntroModel

class SpecificIntro(BaseResource):
    model = IntroModel 

    field_map = {
        "introText": "intro",
        "introImg": "bg_img"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)