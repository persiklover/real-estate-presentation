import axios, { AxiosError } from "axios";
import url from "./url";

export default async function getPage(url: string) {
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
	console.log(
		token,
		session
	);

	try {
		const { data } = await axios.post(`${url}/api/get_page/`, {
			session,
			link: url
		}, {
			headers: {
				Authorization: `Token ${token}`
			}
		});
		const result: Record<string, string> = data?.value;
		return result;
	}
	catch (error) {
		if (error instanceof AxiosError) {
			console.error(error.response?.data);
		}
	}
}
