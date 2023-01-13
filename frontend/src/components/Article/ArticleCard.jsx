import React from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({
    article = {
        slug: '',
        title: '',
        body: ''
    },
    delete_article
}) {
    const navigate = useNavigate();

    const redirects = {
        update: slug => navigate(`/article/update/${slug}`),
    }

    return (
        <div>
            <p>Slug: {article.slug}</p>
            <p>Title: {article.title}</p>
            <p>Body: {article.body}</p>
            <button onClick={() => delete_article(article.slug)}>DELETE</button>
            <button onClick={() => redirects.update(article.slug)}>UPDATE</button>
            <p>-----------------------------------</p>
        </div>
    )
}

ArticleCard.propTypes = {
    article: propTypes.shape({
        slug: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
    }),
    delete_article: propTypes.func
}