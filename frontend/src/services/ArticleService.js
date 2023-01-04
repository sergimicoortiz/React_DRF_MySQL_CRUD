import Api from './Api';

const ArticleService = {

    GetArticles() {
        return Api().get('article/');
    },

    CreateArticles(data) {
        return Api().get('article/', data);
    },

    GetArticle(id) {
        return Api().get(`article/${id}`);
    },

    DeleteArticle(id) {
        return Api().delete(`article/${id}`);
    },

    UpdateArticle(id, data) {
        return Api().put(`article/${id}`, data);
    },

}

export default ArticleService;