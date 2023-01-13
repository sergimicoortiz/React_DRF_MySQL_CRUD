import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useArticles } from "../../hooks/useArticle";
import ArticleForm from "./ArticleForm";

export default function ArticleUpdate() {
    const { slug } = useParams()
    const { useOneArticle, articles, useUpdateArticle } = useArticles();

    useEffect(() => {
        useOneArticle(slug);
    }, []);

    return (
        <div>
            <p>UPDATE Article: {slug}</p>
            <ArticleForm SendData={(data) => useUpdateArticle(slug, data)} article={articles[0]} />
        </div>
    )
}