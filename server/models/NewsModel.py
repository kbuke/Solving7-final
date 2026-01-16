from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db
from datetime import datetime

class NewsModel(db.Model, SerializerMixin):
    __tablename__ = "news"

    id = db.Column(db.Integer, primary_key = True)
    img = db.Column(db.String, nullable = False)
    title = db.Column(db.String, nullable = False)
    text = db.Column(db.String, nullable = False)
    posted = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)