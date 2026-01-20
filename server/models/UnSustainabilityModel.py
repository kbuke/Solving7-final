from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness 
from validators.validate_count import validate_count

from config import db 

class UnSustainabilityModel(db.Model, SerializerMixin):
    __tablename__ = "sustainability_goals"

    id = db.Column(db.Integer, primary_key = True)
    goal = db.Column(db.String, nullable = False, unique = True)
    info = db.Column(db.String, nullable = False)

    pillars = db.relationship("PillarModel", back_populates = "sustainable_goals", secondary = "pillar_goals")

    serialize_rules = (
        "-pillars.sustainable_goals",
    )

    @validates("goal")
    def validate_un_goal(self, key, value):
        value = validate_string(value, "Goal")

        value = validate_uniqueness(value, self, UnSustainabilityModel, key, "Goal")

        value = validate_count(UnSustainabilityModel, self, 17, key, value)

        return value
    
    


