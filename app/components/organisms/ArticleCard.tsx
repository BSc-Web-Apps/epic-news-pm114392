import  { type ReactElement } from "react";
import { BiCast, BiBriefcaseAlt2, BiCameraMovie, BiNews } from "react-icons/bi";
import { Link } from 'react-router'
import siteLogo from '~/assets/png/placeholder-image.png' 
import { getArticleImgSrc } from '~/utils/misc.tsx'
interface ArticleCardProps {
  articleId: string
  title: string
  category?: string
  objectKey?: string
}
 

export default function ArticleCard({ articleId, title, category, objectKey }: ArticleCardProps) {
   const imageSrc = objectKey ? getArticleImgSrc(objectKey) : siteLogo
   const categoryIcons: { [key: string]: ReactElement } = {
    Business: <BiBriefcaseAlt2 size={20} className="text-red-300" />,
    Entertainment: <BiCameraMovie size={20} className="text-red-300" />,
    Technology: <BiCast size={20} className="text-red-300" />,
    'General news': <BiNews  size={20} className="text-red-300" />,
  }

  return (
    <Link to={`/article/${articleId}`}>
    <div>
      <div>
        <img src={imageSrc}  alt={title}  />
      </div>
      <div className="flex h-64 cursor-pointer flex-col justify-between rounded bg-red-900 p-4 transition-all duration-500 hover:scale-110">
        <h3 className="line-clamp-3 text-xl font-bold">{title}</h3>

        <div className="flex items-center gap-2">
          {categoryIcons[category]}
          <p className="text-sm text-red-300">{category || 'General News'}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

  // return (
  //   <Link to={`/article/${articleId}`}>
  //   <div className="bg-red-900 p-4 hover:scale-110 transition-transform duration-300">
  //     <h3>{title}</h3>
  //     <p>{category || 'General News'}</p>
  //   </div>
  //   </Link>
  // )
// }