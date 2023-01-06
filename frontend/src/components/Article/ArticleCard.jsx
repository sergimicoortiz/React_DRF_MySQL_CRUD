import React from "react";
import propTypes from "prop-types";

export default function ArticleCard({
    article = {
        id: null,
        title: '',
        body: ''
    },
    delete_article,
    update_article
}) {

    return (
        <div>
            <p>ID: {article.id}</p>
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
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
    }),
    delete_article: propTypes.func,
    update_article: propTypes.func
}