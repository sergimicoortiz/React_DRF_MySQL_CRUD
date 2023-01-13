import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useUpdateArticle, useArticles } from "../../hooks/useArticle";
import ArticleForm from "./ArticleForm";

export default function ArticleUpdate() {
    const navigate = useNavigate();
    const { useOneArticle, articles } = useArticles();
    const { slug } = useParams()
    useOneArticle(slug);

    function updateArticle(data) {
        useUpdateArticle(slug, data)
            .then(ok => {
                if (ok) {
                    toast.success('Article updated');
                    navigate('/article');
                }
            });
    }
    return (
        <div>
            <p>UPDATE Article: {slug}</p>
            <ArticleForm SendData={updateArticle} article={articles[0]} />
        </div>
    )
}