import axios, { AxiosError } from "axios";
import getSubscriptionExpireDate from "./get-subscription-expire-date";
import url from "./url";

export type UserInfo = Partial<{
	id: number;
	login: string;
	need_change_pass: boolean
	email: string;
	firstname: string;
	lastname: string;
	is_staff: boolean;
	/** "2022-11-21T07:00:38Z" */
	date_joined: string;
	subscription_end: string;
}>;

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

		const subscription_end = await getSubscriptionExpireDate();
		console.log(subscription_end);

		return { ...info, subscription_end };
	}
	catch (error) {
		if (error instanceof AxiosError) {
			console.error(error.response?.data);
		}
	}
}
