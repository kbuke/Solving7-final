from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from models.PillarModel import PillarModel
from models.ProductModel import ProductModel

from config import db

from validators.validate_id_int import validate_id_int
from validators.validate_instance_exists import validate_instance_exists
from validators.validate_unique_pair import validate_unique_pair

class PillarProductsModel(db.Model, SerializerMixin):
    __tablename__ = "pillar_products"

    id = db.Column(db.Integer, primary_key = True)
    pillar_id = db.Column(db.ForeignKey("pillars.id"))
    product_id = db.Column(db.ForeignKey("products.id"))

    # VALIDATION
    @validates("pillar_id")
    def validate_pillar_id(self, key, value):
        value = validate_id_int(value, "pillar_id")
        validate_instance_exists(PillarModel, value, "Pillar")
        return value 
    
    @validates("product_id")
    def validate_product_id(self, key, value):
        value = validate_id_int(value, "product_id")
        validate_instance_exists(ProductModel, value, "Product")
        return value 
    
    def validate_unique(self):
        validate_unique_pair(
            self, 
            PillarProductsModel,
            pillar_id = self.pillar_id,
            product_id = self.product_id
        )