from resources.BaseResource import BaseResource
from models.NewsModel import NewsModel

class NewsList(BaseResource):
    model = NewsModel

    field_map = {
        "newsImg": "img",
        "newsTitle": "title",
        "newsText": "text"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificNews(BaseResource):
    model = NewsModel

    field_map = {
        "newsImg": "img",
        "newsTitle": "title",
        "newsText": "text"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)