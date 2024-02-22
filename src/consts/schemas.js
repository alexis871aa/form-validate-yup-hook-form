import * as yup from 'yup';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from './const';

export const fieldsSchema = yup.object().shape({
	email: yup
		.string()
		.matches(
			EMAIL_REGEXP,
			'Неверный E-mail. Введите стандартный формат электронной почты',
		)
		.min(3, 'Неверный E-mail. Введите не менее 3-х символов.')
		.max(20, 'Неверный логин. Должно быть не больше 20 символов'),
	password: yup
		.string()
		.matches(
			PASSWORD_REGEXP,
			'Неверный пароль. Допустимые символы - буквы, цифры и нижнее подчёркивание.',
		)
		.min(3, 'Неверный пароль. Введите не менее 3-х символов.')
		.max(20, 'Неверный пароль. Введите не больше 20 символов.'),
	repeatPass: yup
		.string()
		.matches(
			PASSWORD_REGEXP,
			'Неверный пароль. Допустимые символы - буквы, цифры и нижнее подчёркивание.',
		)
		.min(3, 'Неверный пароль. Введите не менее 3-х символов.')
		.max(20, 'Неверный пароль. Введите не больше 20 символов.')
		.oneOf([yup.ref('password')], 'Неверный пароль. Несовпадает с полем пароль.'),
});
