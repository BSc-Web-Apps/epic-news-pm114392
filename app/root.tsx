import { RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";
import { useLoaderData, Outlet } from 'react-router'
import { AuthenticityTokenProvider } from 'remix-utils/csrf/react'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import FooterMenuRight from "./components/organisms/Footer/FooterMenuRight.tsx";
import HeaderWithSearch from "./components/organisms/HeaderWithSearch/index.tsx";
import Document from './components/shared-layout/Document.tsx'
import { useToast } from './components/toaster.tsx'
import { EpicToaster } from './components/ui/sonner.tsx'
import { ThemeSwitch, useTheme } from './routes/resources+/theme-switch.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'



export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()
	const theme = useTheme()
  useToast(data?.toast)

	return (
    <AuthenticityTokenProvider token={'INVALID'}>
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
             <EpicToaster
            closeButton
            position="bottom-right"
            theme={theme}
            expand
            richColors
            duration={5000}
          />
        </div>
      </Document>
    </AuthenticityTokenProvider>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
