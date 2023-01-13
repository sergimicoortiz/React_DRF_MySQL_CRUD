import React from "react";
import ArticleCard from './ArticleCard';
import { useNavigate } from 'react-router-dom';
import { useArticles } from '../../hooks/useArticle';

export default function ArticleList() {
    const { articles, useDeleteArticle } = useArticles();
    const navigate = useNavigate();

    const redirects = {
        create: () => navigate('/article/create'),
    }

    const articlesHTML = articles.length > 0
        ? articles.map(article => <ArticleCard article={article} key={article.slug} delete_article={useDeleteArticle} />)
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