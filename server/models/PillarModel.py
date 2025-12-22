from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness
from validators.validate_count import validate_count

from config import db 

class PillarModel(db.Model, SerializerMixin):
    __tablename__ = "pillars"

    id = db.Column(db.Integer, primary_key = True)
    pillar = db.Column(db.String, nullable = False, unique = True)
    intro = db.Column(db.String, nullable = False)
    img = db.Column(db.String, nullable = False)

    # VALIDATIONS 
    @validates("pillar")
    def validate_pillar(self, key, value):
        value = validate_string(value, "Pillar")

        value = validate_uniqueness(value, self, PillarModel, key, "Pillar")

        # ensure no more than 7 pillars
        value = validate_count(PillarModel, self, 7, key, value)

        return value 
    
    @validates("intro")
    def validate_pillar_intro(self, key, value):
        value = validate_string(value, "Intro")

        return value
    
    @validates("img")
    def validate_pillar_img(self, key, value):
        value = validate_string(value, "Img")

        return value