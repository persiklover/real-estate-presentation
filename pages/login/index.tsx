import { AxiosError } from 'axios';
import { useState } from "react"
import login from "../../api/login";
import Stack from "../../components/Stack/Stack";

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	return (
		<div className="container">
			<h1>Авторизация</h1>
			<form>
				<Stack spacing="2rem">
					<label>
						Логин<br/>
						<input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
					</label>
					<label>
						Пароль<br/>
						<input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
					</label>
					<button
						type="submit"
						onClick={async e => {
							e.preventDefault();
							try {
								await login(username, password);
								// Переходим на страницу личного кабинета
								location.href = '/lk';
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
