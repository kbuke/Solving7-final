from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db, bcrypt

class PgSectionModel(db.Model, SerializerMixin):
    __tablename__ = "pg_sections"

    id = db.Column(db.Integer, primary_key = True)
    page = db.Column(db.String, unique = True, nullable = False)
    text = db.Column(db.String, unique = True, nullable = False)