import { useState, useEffect } from "react"
import ArticleService from '../services/ArticleService';

export function useArticles() {
    console.log('useArticles');
    const [articles, setArticles] = useState([]);

    useEffect(function () {
        ArticleService.GetArticles()
            .then(res => setArticles(res.data.data))
            .catch(e => console.error(e));
    }, []);
    return { articles, setArticles };
}


// export function useArticles(setArticles) {
//     useEffect(function () {
//         ArticleService.GetArticles()
//             .then(res => setArticles(res.data.data))
//             .catch(e => console.error(e));
//     }, []);
// }

export function useDeleteArticle(id) {
    ArticleService.DeleteArticle(id)
        .then(res => console.log(res.status, 'DELETE', id))
        .catch(e => console.log(e))
}