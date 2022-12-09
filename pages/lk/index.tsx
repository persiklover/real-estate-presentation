/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Stack from "../../components/Stack/Stack";
import getUserInfo, { UserInfo } from '../../api/get-user-info';
import Link from 'next/link';
import logout from '../../api/logout';

export default function LK() {
	const [parseUrl, setParseUrl] = useState('');
	const [user, setUser] = useState<UserInfo>({});
	const { firstname, lastname, email, subscription_end } = user;

	useEffect(() => {
		(async () => {
			setUser(await getUserInfo());
		})();
	}, []);

	return (
		<>
		<div className="container">
			<section className="profile">
				<div className="profile-avatar">
					<button aria-label="Добавить фото профиля">
						<img src="/plus.svg" alt="" />
					</button>
				</div>
				<Stack spacing="4rem">
					<div className="profile-title-wrapper">
						<h2 className="profile-title">Профиль пользователя</h2>
						<button
							className="profile-logout-button button"
							onClick={async e => {
								try {
									await logout();
									location.href = '/login';
								}
								catch (error) {
									console.error(error);
								}
							}}
						>
							Выйти
						</button>
					</div>

					<div>
						<b className="profile-name">{firstname} {lastname}</b>
						<span className="profile-email">{email}</span>
					</div>

					<div>
						<span className="profile-change-password-label">Пароль</span>
						<Link className="profile-change-password-button" href="/change-password">
							Сменить пароль
						</Link>
					</div>

					<span className="profile-expire-date">
						Дата окончания подписки {subscription_end}
					</span>

					<div className="profile-buttons">
						<button className="button button--filled">Продлить</button>
						<button className="button">Улучшить</button>
					</div>
				</Stack>
			</section>
		</div>
		<section className="create-presentation">
			<div className='create-presentation__title'>
				<svg width="97" height="92" viewBox="0 0 97 92" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill="#D7FD2E" d="M25.7295 76.2524h70.8827v15.2884H25.7295zM10.23 0l61.727 55.5793-10.23 11.3615L0 11.3615z"/>
					<path fill="#D7FD2E" d="M96.6123 26.2175v51.4247H81.3239V26.2175z"/>
				</svg>
				<h2>Добавь ссылку, чтобы создать презентацию</h2>
			</div>

			<div className='create-presentation__input-container'>
				<input
					type="text"
					value={parseUrl}
					onChange={e => setParseUrl(e.target.value)}
				/>
				<button
				disabled={!parseUrl}
				onClick={() => {
					location.href = `/editor?url=${parseUrl}`
				}}
				>Создать</button>
			</div>
		</section>
		<section className='history'>
			<div className='container'>
				<h3>История загрузок</h3>

				<ol>
					{
						new Array(5).fill('https://disk.yandex.ru/client/disk/%D0%94%D1%83%D0%B1%D0%')
							.map((item, index) => {
								return (
									<li key={index}>
										<a href={item}>{item}</a>

										<div>
											<button className="download-btn">
												Скачать
											</button>

											<button className="share-btn">
												<svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M22.7731 4.4325V8.865l-1.7372.089c-8.0313.415-14.1116 4.4769-17.757 11.815C2.225 22.9037 1.5132 24.905.915 27.3659c-.4413 1.8382-1.0252 5.4999-.897 5.6333.0285.0296.5553-.7412 1.1819-1.7345 3.389-5.4109 6.351-8.4647 9.7827-10.1251 2.7198-1.3045 5.4823-1.8975 9.7542-2.105l2.0363-.089.0285 4.729.0427 4.7438 9.085-7.0712L41 14.2907l-9.1134-7.1453L22.7731 0v4.4325Z" fill="#fff"/>
												</svg>
											</button>
										</div>
									</li>
								);
							})
					}
				</ol>
			</div>
		</section>
		</>
	);
}
