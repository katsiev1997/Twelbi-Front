'use server'

import type { SessionUser } from '@/__generated__/output'
import { getServerActionSession } from '@/libs/iron-session.lib'
import type { TypeAuthUser } from '@/shared/types/auth/auth.type'
import { redirect } from 'next/navigation'

export const getUser = async () => {
	const { user } = await getServerActionSession()

	return user
}

export const getExistUser = async () => {
	const { user } = await getServerActionSession()

	return user as SessionUser
}

export const setUser = async (user: TypeAuthUser, redirectPath?: string) => {
	const session = await getServerActionSession()
	session.user = user

	await session.save()

	if (redirectPath) {
		redirect(redirectPath)
	}
}

export const destroySession = async () => {
	const { destroy } = await getServerActionSession()

	destroy()
}
