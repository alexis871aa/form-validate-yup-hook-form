import styles from './app.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsSchema } from './consts';
import { sendData } from './utils';

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repeatPass: '',
		},
		resolver: yupResolver(fieldsSchema),
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const repeatPassError = errors.repeatPass?.message;

	return (
		<div className={styles.app}>
			<form onSubmit={handleSubmit(sendData)}>
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
				{passwordError && (
					<div className={styles.errorLabel}>{passwordError}</div>
				)}
				{repeatPassError && (
					<div className={styles.errorLabel}>{repeatPassError}</div>
				)}
				<input
					name="email"
					type="email"
					placeholder="E-mail"
					{...register('email')}
				/>
				<input
					name="password"
					type="password"
					placeholder="Введите пароль"
					{...register('password')}
				/>
				<input
					name="repeatPass"
					type="password"
					placeholder="Повторите пароль"
					{...register('repeatPass')}
				/>
				<button
					type="submit"
					disabled={!!emailError || !!passwordError || !!repeatPassError}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
