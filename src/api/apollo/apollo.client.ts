import { IS_PRODUCTION, IS_SERVER } from '@/constants/global.constants'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { apolloLinks } from './links/apollo-links.api'

export const apolloClient = new ApolloClient({
	link: apolloLinks,
	defaultOptions: {
		query: {
			fetchPolicy: 'no-cache',
		},
		mutate: {
			fetchPolicy: 'no-cache',
		},
	},
	cache: new InMemoryCache({ addTypename: false }),
	connectToDevTools: !IS_PRODUCTION,
	ssrMode: IS_SERVER,
})
