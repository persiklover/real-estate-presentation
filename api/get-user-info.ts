import axios, { AxiosError } from "axios";
import url from "./url";

export type UserInfo = {
	id: number;
	login: string;
	need_change_pass: boolean
	email: string;
	firstname: string;
	lastname: string;
	is_staff: boolean;
	/** "2022-11-21T07:00:38Z" */
	date_joined: string;
};

export default async function getUserInfo() {
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
		const { data } = await axios.post(`${url}/api/get_user_info/`, {
			session
		}, {
			headers: {
				Authorization: `Token ${token}`
			}
		});
		const info: UserInfo = data?.value;
		return info;
	}
	catch (error) {
		if (error instanceof AxiosError) {
			console.error(error.response?.data);
		}
	}
}
