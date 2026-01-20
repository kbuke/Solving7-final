from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from models.PillarModel import PillarModel
from models.UnSustainabilityModel import UnSustainabilityModel

from config import db

from validators.validate_id_int import validate_id_int
from validators.validate_instance_exists import validate_instance_exists
from validators.validate_unique_pair import validate_unique_pair

class PillarSustainabilityModel(db.Model, SerializerMixin):
    __tablename__ = "pillar_goals"

    id = db.Column(db.Integer, primary_key = True)
    pillar_id = db.Column(db.ForeignKey("pillars.id"))
    sustainable_id = db.Column(db.ForeignKey("sustainability_goals.id"))

    @validates("pillar_id")
    def validate_pillar(self, key, value):
        value = validate_id_int(value, "pillar_id")
        validate_instance_exists(PillarModel, value, "Pillar")
        return value
    
    @validates("sustainable_id")
    def validate_sustainable_goal(self, key, value):
        value = validate_id_int(value, "sustainable_id")
        validate_instance_exists(UnSustainabilityModel, value, "Sustainable Goal")
        return value 
    
    def validate_unique(self):
        validate_unique_pair(
            self, 
            PillarSustainabilityModel,
            pillar_id = self.pillar_id,
            sustainable_id = self.sustainable_id
        )