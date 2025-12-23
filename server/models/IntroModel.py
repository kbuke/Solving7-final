from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_count import validate_count

from config import db 

class IntroModel(db.Model, SerializerMixin):
    __tablename__ = "introduction"

    id = db.Column(db.Integer, primary_key = True)
    intro = db.Column(db.String, nullable = False)
    bg_img = db.Column(db.String, nullable = False)

    @validates("intro", "bg_img")
    def validate_intro(self, key, value):
        value = validate_string(value, "Intro")

        value = validate_count(IntroModel, self, 1, key, value)

        return value