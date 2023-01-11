import Api from './Api';

const ArticleService = {

    GetArticles() {
        return Api().get('article/');
    },

    CreateArticles(data) {
        return Api().post('article/', data);
    },

    GetArticle(slug) {
        return Api().get(`article/${slug}`);
    },

    DeleteArticle(slug) {
        return Api().delete(`article/${slug}`);
    },

    UpdateArticle(slug, data) {
        return Api().put(`article/${slug}`, data);
    },

}

export default ArticleService;