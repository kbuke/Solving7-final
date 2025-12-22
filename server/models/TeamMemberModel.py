from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property

from validators.validate_string import validate_string
from validators.validate_uniqueness import validate_uniqueness

from config import db, bcrypt
import re

class TeamMemberModel(db.Model, SerializerMixin):
    __tablename__ = "team_members"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    img = db.Column(db.String)
    intro = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False, unique = True)
    _password_hash = db.Column(db.String, nullable = False)

    # RELATIONSHIPS
    teams = db.relationship("TeamModel", back_populates = "members", secondary = "member_teams")

    serialize_rules = (
        "-teams.members",
    )

    # VALIDATE MEMBERS NAME AND INTRO
    @validates("name", "intro")
    def validate_name_and_intro(self, key, value):
        return validate_string(value, key.capitalize())

    # VALIDATE USER EMAIL ADDRESS
    @validates("email")
    def validate_email(self, key, value):
        # 1 - Ensure email has a valid value
        value = validate_string(value, "Email")
        
        # 2 - Ensure value meets requirements for email address
        email_pattern = r"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" 

        if not re.match(email_pattern, value):
            raise ValueError("Invalid email address")
        
        # 3 - Check email address ends in @solving7green.com
        if not value.endswith("@solving7green.com"):
            raise ValueError("Email address must end with @solving7green.com")
        
        # 4 - Ensure email is not already registered
        value = validate_uniqueness(value, self, TeamMemberModel, key, TeamMemberModel)
        
        return value
    
    # VALIDATE AND HASH USER PASSWORD
    @hybrid_property
    def password_hash(self):
        raise AttributeError("password: write-only attribute")
    
    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode("utf-8")
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)
    
    def __init__(self, **kwargs):
        password = kwargs.pop("password_hash", None)
        super().__init__(**kwargs)

        if password:
            self.password_hash = password