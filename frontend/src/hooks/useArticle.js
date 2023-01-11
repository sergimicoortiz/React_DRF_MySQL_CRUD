import { useState, useEffect } from "react"
import ArticleService from '../services/ArticleService';

export function useArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(function () {
        console.log('useArticles');
        ArticleService.GetArticles()
            .then(res => setArticles(res.data.data))
            .catch(e => console.error(e));
    }, []);
    return { articles, setArticles };
}

export function useOneArticle(slug) {
    const [article, setArticle] = useState({});

    useEffect(function () {
        console.log('useOneArticle');
        ArticleService.GetArticle(slug)
            .then(res => setArticle(res.data.data))
            .catch(e => console.error(e));
    }, []);
    return { article, setArticle };
}

export function useDeleteArticle(slug) {
    ArticleService.DeleteArticle(slug)
        .then(res => { console.log(res.status, 'DELETE', slug) })
        .catch(e => console.log(e))
}

export async function useCreateArticle(data) {
    try {
        await ArticleService.CreateArticles({ 'article': data });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export function useUpdateArticle(slug, data) {
    const [article, setArticle] = useState({});

    useEffect(function () {
        console.log('useOneArticle');
        ArticleService.UpdateArticle(slug, data)
            .then(res => {
                console.log(res.status)
                setArticle(res.data.data);})
            .catch(e => console.error(e));
    }, []);
    return { article, setArticle };

}