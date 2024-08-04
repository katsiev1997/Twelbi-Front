'use client'

import { apolloClient } from '@/api/apollo/apollo.client'
import { ACCENT_COLOR, IS_PRODUCTION } from '@/constants/global.constants'
import { ApolloProvider } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import NextTopLoader from 'nextjs-toploader'
import type { PropsWithChildren } from 'react'
import AuthConfirmationProvider from './timer/AuthConfirmationProvider'
import AuthVerificationProvider from './timer/AuthVerificationProvider'
import ReactToaster from './toaster/ReactToaster'

if (!IS_PRODUCTION) {
	loadDevMessages()
	loadErrorMessages()
}

export default function MainProvider({ children }: PropsWithChildren) {
	return (
		<>
			<NextTopLoader
				color={ACCENT_COLOR}
				height={2}
				showSpinner={false}
				zIndex={10}
			/>
			<ApolloProvider client={apolloClient}>
				<AuthConfirmationProvider />
				<AuthVerificationProvider />
				{children}
				<ReactToaster />
			</ApolloProvider>
		</>
	)
}
