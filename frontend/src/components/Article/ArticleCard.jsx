import React from "react";
import propTypes from "prop-types";

export default function ArticleCard({
    article = {
        slug: '',
        title: '',
        body: ''
    },
    delete_article,
    update_article
}) {

    return (
        <div>
            <p>Slug: {article.slug}</p>
            <p>Title: {article.title}</p>
            <p>Body: {article.body}</p>
            <button onClick={delete_article}>DELETE</button>
            <button onClick={update_article}>UPDATE</button>
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
    delete_article: propTypes.func,
    update_article: propTypes.func
}