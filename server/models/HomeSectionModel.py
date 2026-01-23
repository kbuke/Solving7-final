from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db, bcrypt

class HomeSectionModel(db.Model, SerializerMixin):
    __tablename__ = "home_sections"

    id = db.Column(db.Integer, primary_key = True)
    section = db.Column(db.String, nullable = False, unique = True)
    info = db.Column(db.String, nullable = False, unique = True)