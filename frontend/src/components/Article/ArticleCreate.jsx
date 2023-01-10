import React from "react";
import ArticleForm from "./ArticleForm";
import { useCreateArticle } from '../../hooks/useArticle';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function ArticleCreate() {
    const navigate = useNavigate();

    function createArticle(data) {
        useCreateArticle(data)
            .then(ok => {
                if (ok) {
                    toast.success('Article created');
                    navigate('/article');
                }
            });
    }

    return (
        <div>
            <p>ARTICLE CREATE</p>
            <ArticleForm SendData={createArticle} />
        </div>
    )
}