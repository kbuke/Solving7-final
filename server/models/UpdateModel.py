from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db

from datetime import datetime

class UpdateModel(db.Model, SerializerMixin):
    __tablename__ = "updates"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable = False, unique = True)
    img = db.Column(db.String, nullable = False, unique = True)
    published = db.Column(db.DateTime, nullable = False, default=datetime.utcnow, onupdate = datetime.utcnow)