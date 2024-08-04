import type { PropsWithChildren } from 'react'

export default function SecureLayout({ children }: PropsWithChildren) {
	return <main>{children}</main>
}
