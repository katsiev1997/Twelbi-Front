export const IS_SERVER = typeof window === 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'

export const SERVER_URL = process.env.APP_SERVER_URL as string
export const CDN_URL = process.env.APP_CDN_URL as string
export const GRAPHQL_SERVER_URL = process.env.APP_GRAPHQL_SERVER_URL as string

export const ACCENT_COLOR = '#19BB4F'
