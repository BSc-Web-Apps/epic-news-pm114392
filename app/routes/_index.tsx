import { data, Link, type MetaFunction, useLoaderData } from 'react-router'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import HeroCallToAction from "~/components/organisms/Hero/HeroCallToAction.tsx";
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
  const allArticles = await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      category: { select: { name: true } },
      images: { select: { objectKey: true } },
    },
  })

  return data({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()

	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega">Your Journey Begins!</h1>

			<div className="w-full py-16">
				<HeroCallToAction
					image={heroImage} 
					imageRight={true}
					hasBackgroundColour={false}
				>
					<div className="flex flex-col gap-8 px-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
					</div>
				</HeroCallToAction>
			</div>

			<div className="container py-16">
        <h2 className="mb-8 text-h2 font-normal">Latest news</h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {allArticles.length > 0 ? (
            allArticles.map(article => (
              <ArticleCard
								articleId={article.id}
                key={article.id}
                title={article.title}
                category={article.category?.name}
                objectKey={article.images[0]?.objectKey}
              />
            ))
          ) : (
            <p>No articles found</p>
          )}
        </div>
      </div>
					</main> 
	)
}
