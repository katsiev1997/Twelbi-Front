import {
	AdvertisementsByTypesDocument,
	type AdvertisementsByTypesQuery,
	type AdvertisementsByTypesQueryVariables,
	type AdvertisingType,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'

export const useAdvertisementsByTypes = async (types: AdvertisingType[]) => {
	const { data, error } = await apolloClient.query<
		AdvertisementsByTypesQuery,
		AdvertisementsByTypesQueryVariables
	>({
		query: AdvertisementsByTypesDocument,
		variables: {
			types,
		},
	})

	return {
		advertisements: data.advertisementsByTypes || [],
		advertisementsError: error,
	}
}
