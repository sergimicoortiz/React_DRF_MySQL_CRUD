import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import { useArticles } from "../../hooks/useArticle";
import ArticleForm from "./ArticleForm";

export default function ArticleUpdate() {
    // const navigate = useNavigate();
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