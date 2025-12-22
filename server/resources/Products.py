from resources.BaseResource import BaseResource
from models.ProductModel import ProductModel

class ProductsList(BaseResource):
    model = ProductModel

    field_map = {
        "productName": "name",
        "productImg": "img",
        "productInfo": "info"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificProduct(BaseResource):
    model = ProductModel

    field_map = {
        "productName": "name",
        "productImg": "img",
        "productInfo": "info"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)