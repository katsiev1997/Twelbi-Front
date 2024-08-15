'use client'

import loginIcon from '@/assets/images/icons/login.png'
import { useAuth } from '@/hooks/mutations/auth/useAuth'
import { LoginButton as TelegramAuth } from '@telegram-auth/react'
import type { ButtonHTMLAttributes, FC } from 'react'
import Picture from '../../common/picture/Picture'
import Modal from '../../templates/modal/Modal'
import styles from './Auth.module.scss'
import AuthLogin from './login/AuthLogin'
import AuthLost from './lost/AuthLost'
import AuthRegister from './register/AuthRegister'
import AuthReset from './reset/AuthReset'

const Auth: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => {
	const {
		isShow,
		isLogin,
		isRegister,
		isLost,
		changeType,
		toggleShow,
		isReset,
		token,
		telegramLogin,
	} = useAuth()

	return (
		<>
			<button {...rest} onClick={toggleShow} type="button">
				<Picture src={loginIcon.src} alt="Войти" />
				Войти
			</button>
			{isShow && (
				<Modal
					heading={
						isRegister ? `Регистрация` : isLost ? 'Забыли пароль' : `Войти`
					}
					closeModal={toggleShow}
				>
					{isRegister ? (
						<AuthRegister />
					) : isLost ? (
						<AuthLost />
					) : isLogin ? (
						<AuthLogin />
					) : (
						isReset &&
						token.type === 'reset' && (
							<AuthReset token={token.value} changeType={changeType} />
						)
					)}
					{!isLost && (
						<button
							type="button"
							className={styles.lost}
							onClick={() => changeType('lost')}
						>
							Забыли пароль?
						</button>
					)}
					<div className={styles.telegram}>
						<TelegramAuth
							botUsername={process.env.BOT_USERNAME as string}
							onAuthCallback={(data) => {
								console.log(data)
								telegramLogin({
									login:
										data.username ||
										`${data.first_name}${
											data.last_name ? ' ' + data.last_name : ''
										}`,
									password: data.hash,
								})
							}}
							buttonSize="large"
							cornerRadius={20}
							showAvatar={false}
							lang="ru"
						/>
					</div>
					<div className={styles.change}>
						<div className={styles.line}>
							<span>{isLogin ? 'Ещё нет аккаунта?' : 'Уже есть аккаунт?'}</span>
						</div>
						<button
							type="button"
							className={styles.changeBtn}
							onClick={() => changeType(isLogin ? 'register' : 'login')}
						>
							{isLogin ? 'Зарегистрироваться' : 'Войти'}
						</button>
					</div>
				</Modal>
			)}
		</>
	)
}

export default Auth
