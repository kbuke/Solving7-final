from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db

class ProductModel(db.Model, SerializerMixin):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    img = db.Column(db.String, nullable = False, unique = True)
    info = db.Column(db.String, nullable = False, unique = True)

    # VALIDATIONS
    @validates("name")
    def validate_product_name(self, key, value):
        value = validate_string(value, "Name")

        value = validate_uniqueness(value, self, ProductModel, key, ProductModel)

        return value

    @validates("img")
    def validate_product_img(self, key, value):
        value = validate_string(value, "Img")

        value = validate_uniqueness(value, self, ProductModel, key, ProductModel)

        return value

    @validates("info")
    def validate_product_img(self, key, value):
        value = validate_string(value, "Info")

        value = validate_uniqueness(value, self, ProductModel, key, ProductModel)

        return value