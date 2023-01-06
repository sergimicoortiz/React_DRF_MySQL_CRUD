import React from "react";
import ArticleCard from './ArticleCard';
import { useArticles } from '../../hooks/useArticle';

export default function ArticleList() {

    function delete_article(id) {
        console.log(id, 'DELETE');
    }


    function update_article(id) {
        console.log(id, 'UPDATE');
    }

    const articles = useArticles();
    const articlesHTML = articles.length > 0 ? (articles.map((article) => (
        <ArticleCard article={article} key={article.id} update_article={() => update_article(article.id)} delete_article={() => delete_article(article.id)} />
    ))) : (<p>No Articles</p>)

    return (
        <div>
            <h1>ArticleList</h1>
            {articlesHTML}
        </div>
    )
}