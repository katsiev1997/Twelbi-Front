export interface IAuthStore {
	remainingTime: number
	setTimer: (remainingTime: number) => void
	clearTimer: () => void
}
