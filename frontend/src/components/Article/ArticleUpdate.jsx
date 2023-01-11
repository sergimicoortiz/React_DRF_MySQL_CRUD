import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useOneArticle, useUpdateArticle } from "../../hooks/useArticle";
import ArticleForm from "./ArticleForm";

export default function ArticleUpdate() {
    const { id } = useParams()
    const { article } = useOneArticle(id);
    const [newArticle, setNewArticle] = useState();

    function updateArticle(data) {
        setNewArticle(data);
    }

    useEffect(() => {
        if (newArticle) {
            console.log(newArticle, 'EFFECT');
            // useUpdateArticle(id, newArticle);
        }
    }, [newArticle]);

    return (
        <div>
            <p>UPDATE</p>
            <ArticleForm SendData={updateArticle} article={article} />
        </div>
    )
}