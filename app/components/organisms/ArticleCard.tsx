import { Link } from 'react-router'
interface ArticleCardProps {
  articleId: string
  title: string
  category?: string
}

export default function ArticleCard({ articleId, title, category }: ArticleCardProps) {
  return (
    <Link to={`/article/${articleId}`}>
    <div className="bg-red-900 p-4 hover:scale-110 transition-transform duration-300">
      <h3>{title}</h3>
      <p>{category || 'General News'}</p>
    </div>
    </Link>
  )
}