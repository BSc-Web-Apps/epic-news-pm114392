import { RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";
import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import FooterMenuRight from "./components/organisms/Footer/FooterMenuRight.tsx";
import HeaderWithSearch from "./components/organisms/HeaderWithSearch/index.tsx";
import Document from './components/shared-layout/Document.tsx'
import { ThemeSwitch, useTheme } from './routes/resources+/theme-switch.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import headshot from '~/assets/jpg/portrait-01.jpg'
import headshot2 from '~/assets/jpg/portrait-02.jpg'
import headshot3 from '~/assets/jpg/portrait-03.jpg'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageSrc: string;
}

export function TeamMemberCard({ name, role, imageSrc,}: TeamMemberCardProps) {
  return (
    <div className="rounded-lg bg-slate-800 p-8 w-fit">
      <img
        src={imageSrc}
        alt="An employee"
        className="w-64 h-64 rounded-full mx-auto"
      />

      <div className="pt-6">
        <h3 className="text-center font-semi-bold text-white">{name}</h3>
        <p className="text-slate-400 text-center pt-1">{role}</p>

        <div className="flex justify-center gap-4 text-slate-400 pt-6">
          <RiTwitterXFill />
          <RiLinkedinBoxFill />
        </div>
      </div>
    </div>
  );
};

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()
	const theme = useTheme()

	return (
		<Document theme={theme} nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<HeaderWithSearch/>
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your Journey Begins!</h1>

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
				</div>
				<div className="container flex justify-between pb-5">
          <ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
        </div>
				<FooterMenuRight/>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
