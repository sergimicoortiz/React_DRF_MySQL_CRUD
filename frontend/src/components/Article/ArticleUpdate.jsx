import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useOneArticle, useUpdateArticle } from "../../hooks/useArticle";
import ArticleForm from "./ArticleForm";

export default function ArticleUpdate() {
    const navigate = useNavigate();
    const { slug } = useParams()
    const { article } = useOneArticle(slug);

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
            <ArticleForm SendData={updateArticle} article={article} />
        </div>
    )
}