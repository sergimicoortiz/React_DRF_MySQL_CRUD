import ArticleCard from './ArticleCard';
import { useArticles } from '../../hooks/useArticle';

export default function ArticleList() {
    const articles = useArticles();
    return (
        <div>
            <h1>ArticleList</h1>
            {articles.map((article) => (
                <ArticleCard article={article} />
            ))}
        </div>
    )
}