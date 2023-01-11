import { useState, useEffect } from "react"
import ArticleService from '../services/ArticleService';

export function useArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(function () {
        console.log('a');
        ArticleService.GetArticles()
            .then(res => setArticles(res.data.data))
            .catch(e => console.error(e));
    }, []);
    return { articles, setArticles };
}

export function useOneArticle(slug) {
    const [article, setArticle] = useState({});

    useEffect(function () {
        ArticleService.GetArticle(slug)
            .then(res => setArticle(res.data.data))
            .catch(e => console.error(e));
    }, []);
    return { article, setArticle };
}

export async function useDeleteArticle(slug) {
    try {
        await ArticleService.DeleteArticle(slug);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
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

export async function useUpdateArticle(slug, data) {
    try {
        await ArticleService.UpdateArticle(slug, { 'article': data });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}