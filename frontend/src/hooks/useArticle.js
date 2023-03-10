import { useState, useEffect, useCallback } from "react"
import ArticleService from '../services/ArticleService';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useArticles() {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    useEffect(function () {
        ArticleService.GetArticles()
            .then(res => setArticles(res.data.data))
            .catch(e => console.error(e));
    }, []);

    const useDeleteArticle = (slug) => {
        ArticleService.DeleteArticle(slug)
            .then(res => {
                if (res.status === 200) {
                    setArticles(articles.filter(item => item.slug !== slug));
                    toast.success('Article deleted');
                };
            })
            .catch(e => console.error(e));
    }

    const useOneArticle = useCallback((slug) => {
        console.log('a');
        ArticleService.GetArticle(slug)
            .then(res => setArticles([res.data.data]))
            .catch(e => console.error(e));
    }, []);

    const useUpdateArticle = useCallback((slug, data) => {
        ArticleService.UpdateArticle(slug, { 'article': data })
            .then(res => {
                if (res.status === 200) {
                    toast.success('Article updated');
                    navigate('/article');
                }
            })
            .catch(e => console.error(e));
    }, []);

    const useCreateArticle = useCallback(data => {
        ArticleService.CreateArticles({ 'article': data })
            .then(res => {
                if (res.status === 200) {
                    toast.success('Article created');
                    navigate('/article');
                }
            })
            .catch(e => console.error(e));
    }, []);

    return { articles, useDeleteArticle, useOneArticle, useUpdateArticle, useCreateArticle };
}