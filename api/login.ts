import axios from "axios";
import url from "./url";

export default async function login(username?: string, password?: string) {
	const response = await axios.post(`${url}/api/login/`, {}, {
		auth: {
			username: username ?? 'kot18215',
			password: password ?? '1234'
		}
	});
	const data: {
		need_change_pass: boolean;
		session: string;
		token: string;
	} = response.data;
	if (typeof window !== "undefined") {
		localStorage.setItem('token', data.token)
		localStorage.setItem('session', data.session)
	}
	else {
		global.token = data.token;
		global.session = data.session;
	}
	return data;
}
