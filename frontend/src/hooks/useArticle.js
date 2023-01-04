import { useState, useEffect } from "react"
import ArticleService from '../services/ArticleService';

export function useArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(function () {
        ArticleService.GetArticles()
            .then(res => setArticles(res.data.data))
            .catch(e => console.error(e));
    }, []);
    return articles;
}