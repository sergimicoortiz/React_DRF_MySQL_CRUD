import React from "react";
import ArticleCard from './ArticleCard';
import { useNavigate } from 'react-router-dom';
import { useArticles, useDeleteArticle } from '../../hooks/useArticle';

export default function ArticleList() {
    const { articles, setArticles } = useArticles();
    const navigate = useNavigate();

    const redirects = {
        create: () => navigate('/article/create'),
        update: id => navigate(`/article/update/${id}`),
    }

    function delete_article(id) {
        useDeleteArticle(id);
        setArticles(articles.filter(item => item.id !== id));
    }

    const articlesHTML = articles.length > 0 ? (articles.map((article) => (
        <ArticleCard article={article} key={article.id} update_article={() => redirects.update(article.id)} delete_article={() => delete_article(article.id)} />
    ))) : (<p>No Articles</p>)

    return (
        <div>
            <h1>ArticleList</h1>
            <button onClick={redirects.create}>CREATE</button>
            <p>-----------------------------------</p>
            {articlesHTML}
        </div>
    )
}