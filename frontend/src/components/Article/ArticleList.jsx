import React from "react";
import ArticleCard from './ArticleCard';
import { useNavigate } from 'react-router-dom';
import { useArticles, useDeleteArticle } from '../../hooks/useArticle';

export default function ArticleList() {
    const { articles, setArticles } = useArticles();
    const navigate = useNavigate();

    const redirects = {
        create: () => navigate('/article/create'),
        update: slug => navigate(`/article/update/${slug}`),
    }

    function delete_article(slug) {
        useDeleteArticle(slug)
            .then(ok => {
                if (ok) {
                    setArticles(articles.filter(item => item.slug !== slug));
                }
            })
    }

    const articlesHTML = articles.length > 0
        ? articles.map(article => <ArticleCard article={article} key={article.slug} update_article={() => redirects.update(article.slug)} delete_article={() => delete_article(article.slug)} />)
        : <p>No Articles</p>

    return (
        <div>
            <h1>ArticleList</h1>
            <button onClick={redirects.create}>CREATE</button>
            <p>-----------------------------------</p>
            {articlesHTML}
        </div>
    )
}