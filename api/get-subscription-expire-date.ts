import axios, { AxiosError } from "axios";
import url from "./url";

export default async function getSubscriptionExpireDate() {
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
		const response = await axios.get(`${url}/api/payments/user-subscriptions/`, {
			data: {
				session
			},
			headers: {
				Authorization: `Token ${token}`
			}
		});
		const data: {
			/** "2022-12-09T17:00:16.896695Z" */
			created: string;
			/** "2022-12-09T17:00:16.896695Z" */
			expiration_date: string;
			id: number
			subscription: {
				archived: boolean
				free: boolean;
				id: number;
				number_presentations: number;
				/** "0.00" */
				price: string;
				product_id: string;
				title: string;
				unlimited: boolean;
			};
			user: number;
		}[] = response.data;
		if (data?.length) {
			const lastSubscription = data[data.length - 1].expiration_date;
			const date = new Date(lastSubscription);
			const { format } = Intl.DateTimeFormat('ru')
			return format(date);
		}
	}
	catch (error) {
		if (error instanceof AxiosError) {
			console.error(error.response?.data);
		}
	}
}
