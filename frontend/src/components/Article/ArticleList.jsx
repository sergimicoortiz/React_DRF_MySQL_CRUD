import ArticleCard from './ArticleCard';
import { useArticles } from '../../hooks/useArticle';

export default function ArticleList() {
    const articles = useArticles();
    console.log(articles);
    return (
        <div>
            <h1>ArticleList</h1>
            <ArticleCard />
        </div>
    )
}