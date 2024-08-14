module.exports = {
	apps: [
		{
			name: 'next-app',
			script: 'yarn',
			args: 'start',
			watch: true,
			ignore_watch: ['node_modules', 'logs', '.next/cache'],
			env: {
				BOT_USERNAME: 'twelbi_auth_bot',
				REACT_APP_ENV: 'production',
				REACT_APP_DOMAIN: 'keeywork.store',
				SITE_URL: 'https://keeywork.store',
				APP_SERVER_URL: 'https://back.keeywork.store',
				APP_CDN_URL: 'https://cdn-edge.keeywork.store',
				GRAPHQL_SERVER_URL: 'https://back.keeywork.store/api/mygraphql',
				IRON_PASSWORD:
					'CSDdp@3UqRLkVJHTzsreNcjBZuh&vA^G)5W!y2bEKm(P4gY*78QaM%XfItF',
			},
		},
	],
}
