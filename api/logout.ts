import axios, { AxiosError } from "axios";
import url from "./url";

export default async function logout() {
	let token: string;
	let session: string;
	if (typeof window !== "undefined") {
		token = localStorage.getItem('token')!;
		session = localStorage.getItem('session')!;
	}
	else {
		token = global.token;
		session = global.session;
	}

	try {
		await axios.post(`${url}/api/logout/`, {
			session
		}, {
			headers: {
				Authorization: `Token ${token}`
			}
		});
		localStorage.removeItem('token');
		localStorage.removeItem('session');
	}
	catch (error) {
		if (error instanceof AxiosError) {
			let message = error.response?.data;
			console.error(message);
			throw message;
		}
		throw error?.message ?? error;
	}
}
