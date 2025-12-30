from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from models.TeamMemberModel import TeamMemberModel
from models.TeamModel import TeamModel

from config import db

from validators.validate_id_int import validate_id_int
from validators.validate_instance_exists import validate_instance_exists
from validators.validate_unique_pair import validate_unique_pair

class MemberTeamsModel(db.Model, SerializerMixin):
    __tablename__ = "member_teams"

    id = db.Column(db.Integer, primary_key = True)
    member_id = db.Column(db.ForeignKey("team_members.id"))
    team_id = db.Column(db.ForeignKey("teams.id"))

    @validates("member_id")
    def validate_member_id(self, key, value):
        value = validate_id_int(value, "member_id")
        validate_instance_exists(TeamMemberModel, value, "Team Member")
        return value
    
    @validates("team_id")
    def validate_team_id(self, key, value):
        value = validate_id_int(value, "team_id")
        validate_instance_exists(TeamModel, value, "Team")
        return value
    
    def validate_unique(self):
        validate_unique_pair(
            self, 
            MemberTeamsModel,
            member_id = self.member_id,
            team_id = self.team_id
        )