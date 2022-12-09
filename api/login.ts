import axios, { AxiosError } from "axios";
import url from "./url";

export default async function login(username?: string, password?: string) {
	try {
		const response = await axios.post(`${url}/api/login/`, {}, {
			auth: {
				username,
				password
			}
		});
		const data: {
			need_change_pass: boolean;
			session: string;
			token: string;
		} = response.data;
		return data;
	}
	catch (error) {
		if (error instanceof AxiosError) {
			throw error.response.data?.detail;
		}
		else {
			throw error?.message ?? error;
		}
	}
}
