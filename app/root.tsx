import { RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";
import { useLoaderData, Outlet } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import FooterMenuRight from "./components/organisms/Footer/FooterMenuRight.tsx";
import HeaderWithSearch from "./components/organisms/HeaderWithSearch/index.tsx";
import Document from './components/shared-layout/Document.tsx'
import { ThemeSwitch, useTheme } from './routes/resources+/theme-switch.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
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
					
					<Outlet/>
					<div className="container flex justify-between pb-5">
						<ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
					</div>
					<FooterMenuRight/>
				</div>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
