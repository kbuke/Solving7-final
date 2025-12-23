from resources.BaseResource import BaseResource
from models.PillarProductsModel import PillarProductsModel

class PillarProductsList(BaseResource):
    model = PillarProductsModel

    field_map = {
        "pillarId" : "pillar_id",
        "productId": "product_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificPillarProductsList(BaseResource):
    model = PillarProductsModel

    field_map = {
        "pillarId" : "pillar_id",
        "productId": "product_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def delete(self, id):
        return self.delete_instance(id)