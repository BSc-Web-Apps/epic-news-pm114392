import { type MetaFunction } from 'react-router'
import { TeamMemberCard } from '#app/root.tsx'
import headshot from '~/assets/jpg/portrait-01.jpg'
import headshot2 from '~/assets/jpg/portrait-02.jpg'
import headshot3 from '~/assets/jpg/portrait-03.jpg'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import HeroCallToAction from "~/components/organisms/Hero/HeroCallToAction.tsx";

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your Journey Begins!</h1>

            <div className="w-full py-16">
							<HeroCallToAction image={heroImage} 
							imageRight={true} hasBackgroundColour={false}>
                <div className="flex flex-col gap-8 px-8">
                  <h2 className="text-h2">Welcome to Epic News</h2>
                  <p className="text-lg">
                    Keep up to date with the latest tech news.
                  </p>
                </div>
              </HeroCallToAction>
            </div>

            <div className="flex flex-col gap-8 pt-8 m-4 md:flex-row">
							<TeamMemberCard
								name="Leonard Krasner"
								role="Senior Designer"
								imageSrc={headshot}
							/>
							<TeamMemberCard
								name="John Doe"
								role="Marketing Manager"
								imageSrc={headshot2}
							/>
							<TeamMemberCard
								name="Jenna Corey"
								role="Finance Advisor"
								imageSrc={headshot3}
							/>
						</div>
						<p className="lg:text-x1 text-base text-gray-600 md:text-lg">
							Welcome to Epic News, where the latest developements in tech are
							found.
						</p>
						<button className="rounded-full bg-amber-200 px-4 py-2 text-white md:px-6 md:py-3 lg:px-8 lg:py-4 flex">
							Learn More?
						</button>
					</main> 
	)
}
