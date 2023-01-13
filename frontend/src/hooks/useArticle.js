import { useState, useEffect, useCallback } from "react"
import ArticleService from '../services/ArticleService';

export function useArticles() {
    const [articles, setArticles] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(function () {
        ArticleService.GetArticles()
            .then(res => setArticles(res.data.data))
            .catch(e => console.error(e));
    }, []);

    const timeoutStatusOK = (time = 400) => {
        setStatus(true);
        setTimeout(() => {
            setStatus(false);
        }, time);
    }//intervalStatus

    const useDeleteArticle = (slug) => {
        ArticleService.DeleteArticle(slug)
            .then(res => {
                if (res.status === 200) {
                    setArticles(articles.filter(item => item.slug !== slug));
                    timeoutStatusOK()
                };
            })
            .catch(e => console.error(e));
    }//useDeleteArticle

    const useOneArticle = useCallback(slug => {
        console.log('a');
        ArticleService.GetArticle(slug)
            .then(res => setArticles([res.data.data]))
            .catch(e => console.error(e));
    }, []);//useOneArticle

    // const useOneArticle = slug => {
    //     console.log('a');
    //     useEffect(() => {
    //         ArticleService.GetArticle(slug)
    //             .then(res => setArticles([res.data.data]))
    //             .catch(e => console.error(e));
    //     }, []);
    // }

    return { articles, status, useDeleteArticle, useOneArticle };
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