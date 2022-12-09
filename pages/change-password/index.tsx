import { AxiosError } from 'axios';
import { useState } from "react"
import changePassword from '../../api/change-password';
import Stack from "../../components/Stack/Stack";

export default function ChangePassword() {
	const [p1, setP1] = useState('');
	const [p2, setP2] = useState('');
	const [error, setError] = useState('');
	return (
		<div className="container">
			<h1>Смена пароля</h1>
			<form>
				<Stack spacing="2rem">
					<label>
						Новый пароль<br />
						<input type="password" value={p1} onChange={e => setP1(e.target.value)} />
					</label>
					<label>
						Введите новый пароль ещё раз<br />
						<input type="password" value={p2} onChange={e => setP2(e.target.value)} />
					</label>
					<button
						type="submit"
						onClick={async e => {
							e.preventDefault();
							if (p1 !== p2) {
								setError('Пароли не совпадают!');
								return;
							}
							try {
								await changePassword(p1);
								location.href = '/login';
							}
							catch (error) {
								if (error instanceof AxiosError) {
									let message = error.response?.data;
									if (typeof message === 'object') {
										message = message?.detail;
									}
									setError(message);
								}
							}
						}}
					>
						Войти
					</button>
					{error &&
						<p>{error}</p>
					}
				</Stack>
			</form>
		</div>
	)
}
