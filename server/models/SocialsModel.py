from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db

class SocialsModel(db.Model, SerializerMixin):
    __tablename__ = "socials"

    id = db.Column(db.Integer, primary_key = True)
    url = db.Column(db.String, nullable = False, unique = True)
    name = db.Column(db.String, nullable = False, unique = True)

    @validates("url")
    def validate_url(self, key, value):
        value = validate_string(value, "Social")

        value = validate_uniqueness(value, self, SocialsModel, key, "Social")

        return value 
    
    @validates("name")
    def validate_name(self, key, value):
        value = validate_string(value, "Social")

        value = validate_uniqueness(value, self, SocialsModel, key, "Social")

        return value