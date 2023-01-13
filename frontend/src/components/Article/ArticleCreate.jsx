import React from "react";
import ArticleForm from "./ArticleForm";
import { useArticles } from '../../hooks/useArticle';

export default function ArticleCreate() {
    const { useCreateArticle } = useArticles();

    return (
        <div>
            <p>ARTICLE CREATE</p>
            <ArticleForm SendData={(data) => useCreateArticle(data)} />
        </div>
    )
}