from resources.BaseResource import BaseResource
from models.PgSectionModel import PgSectionModel

class PgSectionList(BaseResource):
    model = PgSectionModel

    field_map = {
        "pgTitle": "page",
        "pgText": "text"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()
    
class SpecificPgSection(BaseResource):
    model = PgSectionModel

    field_map = {
        "pgTitle": "page",
        "pgText": "text"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)

