from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string

from config import db

class TeamModel(db.Model, SerializerMixin):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    intro = db.Column(db.String, nullable = False)

    @validates("name")
    def validate_team_name(self, key, value):
        # 1 Ensure name is a valid string
        value = validate_string(value, "Name")
        
        # 3 - Ensure the value is unique
        existing_team = TeamModel.query.filter(TeamModel.name == value).first()
        if existing_team and existing_team.id != self.id:
            raise ValueError(f"Team name {value} is already registered on the app")
        
        return value 
    
    @validates("intro")
    def validate_team_intro(self, key, value):
        #1 - Ensure value is not a boolean, null, or an empty string
        value = validate_string(value, "Intro")