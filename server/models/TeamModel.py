from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db

class TeamModel(db.Model, SerializerMixin):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False, unique = True)
    intro = db.Column(db.String, nullable = False)

    # RELATIONS
    members = db.relationship("TeamMemberModel", back_populates = "teams", secondary = "member_teams")

    serialize_rules = (
        "-members.teams",
    )

    @validates("name")
    def validate_team_name(self, key, value):
        # 1 Ensure name is a valid string
        value = validate_string(value, "Name")
        
        # 2 - Ensure the value is unique
        value = validate_uniqueness(value, self, TeamModel, key, TeamModel)
        
        return value 
    
    @validates("intro")
    def validate_team_intro(self, key, value):
        #1 - Ensure value is not a boolean, null, or an empty string
        value = validate_string(value, "Intro")
        return value