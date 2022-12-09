import axios, { AxiosError } from "axios";
import url from "./url";

export default async function changePassword(password: string) {
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
		await axios.post(`${url}/api/password-change/`, {
			session,
			password
		}, {
			headers: {
				Authorization: `Token ${token}`
			}
		});
	}
	catch (error) {
		if (error instanceof AxiosError) {
			console.error(error.response?.data);
		}
	}
}
