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

    # VALIDATION
    # @validates("member_id", "team_id")
    # def validate_sustainable_solution(self, key, value):
    #     # 1 - Check value is an integer
    #     if not isinstance(value, int):
    #         try:
    #             value = int(value)
    #         except:
    #             raise ValueError("Please enter a proper integer")
        
    #     # 2 - Check sustainable goal exists 
    #     if key == "member_id":
    #         existsing_member = TeamMemberModel.query.filter(TeamMemberModel.id == value).first()
    #         if not existsing_member:
    #             raise ValueError(f"Team Member: {value} is not registered on here")
        
    #     # 3 - Check solution exists
    #     if key == "team_id":
    #         existing_team = TeamModel.query.filter(TeamModel.id == value).first()
    #         if not existing_team:
    #             raise ValueError(f"Team {value} is not registered on the application")
        
    #     # 4 - Check if the relationship is already defined
    #     if key == "member_id":
    #         member_id = value
    #         team_id = self.team_id
    #     else:
    #         member_id = self.member_id
    #         team_id = value

    #     # Only check when BOTH are present
    #     if member_id and team_id:
    #         existing_relation = MemberTeamsModel.query.filter_by(
    #             member_id=member_id,
    #             team_id=team_id
    #         ).first()

    #         if existing_relation and existing_relation.id != self.id:
    #             raise ValueError(
    #                 f"Relationship already exists between Member: {member_id} and Team: {team_id}"
    #             )
            
    #     return value