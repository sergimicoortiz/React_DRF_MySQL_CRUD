import PropTypes from "prop-types";

export default function ArticleCard({
    article = {
        id: null,
        title: '',
        body: ''
    }
}) {
    return (
        <div>
            <p>ID: {article.id}</p>
            <p>Title: {article.title}</p>
            <p>Body: {article.body}</p>
        </div>
    )
}

ArticleCard.PropTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    })
}