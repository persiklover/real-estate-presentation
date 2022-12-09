/* eslint-disable @next/next/no-img-element */
import Arrow from '../components/Arrow'

export default function Home() {
	return (
		<>
			<main>
				<section className="section1">
					<div className="container">
						<h1 className="title">Создавай презентацию по любой квартире</h1>
						<p className="subtitle">
							с Propertyfinder в 1 клик
						</p>
						<button>Попробовать бесплатно</button>
						<div className="section1-examples">
							<img src="/examples/1.jpg" alt="" />
							<img src="/examples/2.jpg" alt="" />
							<img src="/examples/3.jpg" alt="" />
							<img src="/examples/hand.png" alt="" />
						</div>
					</div>
				</section>
				<section className="section2">
					<div className="container">
						<h2 className="section-title">
							<Arrow />
							Как это работает
						</h2>

						<ul className="section2-steps">
							<li>
								<h3>Шаг 1</h3>
								<p>Скопируй ссылку на <b>необходимый объект</b> и вставь ее в редактор</p>
							</li>
							<li>
								<h3>Шаг 2</h3>
								<p><b>Отредактируй</b> необходимую информацию, удали лишние фото или добавь свои фото</p>
							</li>
							<li>
								<h3>Шаг 3</h3>
								<p>Скачай готовую презентацию<b> в PDF или поделись ею</b> в whatsapp/telegram/почту</p>
							</li>
						</ul>
					</div>
				</section>
				<section className="section3">
					<div className="container">
						<h2 className="section-title">
							<Arrow />
							Преимущества работы
						</h2>
						<ul className="section3-list">
							<li>
								<div className="section3-list-img">
									<img src="/time.png" alt="" style={{ marginTop: '-.5rem' }} />
								</div>
								<h3>Скорость</h3>
								<p>
									Время на создание<br />
									презентации <b>45 секунд</b>
								</p>
							</li>
							<li>
								<div className="section3-list-img">
									<img src="/arrow-right.svg" alt="" />
								</div>
								<h3>ЗАГОЛОВОК</h3>
								<p>
									Делись презентацией<br />
									<b>в whats app, telegram, pdf</b>
								</p>
							</li>
							<li>
								<div className="section3-list-img">
									<img src="/pen.png" alt="" style={{ marginTop: '-.3rem' }} />
								</div>
								<h3>ЛЕГКО</h3>
								<p>
									<b>Удобный и редактируемый</b><br />
									<b>шаблон</b> презентации
								</p>
							</li>
							<li>
								<div className="section3-list-img">
									<img src="/plus.svg" alt="" />
								</div>
								<h3>ЗАГОЛОВОК</h3>
								<p>
									<b>Добавляй свои фото</b>, удаляй<br />
									лишние слайды, меняй их<br />
									местами
								</p>
							</li>
							<li>
								<div className="section3-list-img">
									<img src="/archive.png" alt="" />
								</div>
								<h3>АРХИВ</h3>
								<p>
									<b>История создания презентаций</b>,<br />
									c возможностью<br />
									редактирования
								</p>
							</li>
							<li>
								<div className="section3-list-img">
									<img src="/support.png" alt="" />
								</div>
								<h3>ПОМОЩЬ</h3>
								<p>
									<b>Online-поддержка 24/7</b> на<br />
									английском и русском языке
								</p>
							</li>
						</ul>
					</div>
				</section>
				<section className="section4">
					<div className="container">
						<div className="section4_content">
								<img
									className='video'
									src="/video-plate.png"
									alt=""
								/>

								<div className='section4_info'>
									<h2 className="section-title">
										<Arrow />
										Заголовок
									</h2>

									<ul	>
										<li>
											<img src="/pen.png" alt="" style={{ marginTop: '-.5rem' }} />
											Редактируй текст
										</li>

										<li>
											<img src="/slides.png" alt="" style={{ marginTop: '-.5rem' }} />
											Меняй местами слайды или удаляй их
										</li>

										<li>
											<img src="/add.png" alt="" style={{ marginTop: '-.5rem' }} />
											Добавляй свои фото
										</li>

										<li>
											<img src="/download.png" alt="" style={{ marginTop: '-.5rem' }} />
											Скачивай в удобном формате
										</li>
									</ul>

									<button>
										Попробовать сейчас
									</button>
								</div>
						</div>
					</div>
				</section>
				<section className="section5">
					<div className="container">
						<h2 className="section-title">
							<Arrow />
							Типы подписок
						</h2>
						<ul className="section5-plans">
							<li>
								<div className="img">
									<img src="/plane.png" alt="" style={{ marginTop: '8rem' }} />
								</div>
								<div className="content">
									<h3>Free</h3>
									<div className="price" style={{ color: '#989898' }}>$0</div>
									<ul>
										<li>
											1 презентация в день<br />
											при регистрации
										</li>
									</ul>
									<button>Подключить</button>
								</div>
							</li>
							{/* @ts-ignore */}
							<li style={{ '--color': '#97BCF4' }}>
								<div className="img">
									<img src="/kite.png" alt="" />
								</div>
								<div className="content">
									<h3>Light</h3>
									<div className="price">$8</div>
									<ul>
										<li>$10 в месяц</li>
										<li>50 презентаций в месяц</li>
									</ul>
									<button>Подключить</button>
								</div>
							</li>
							{/* @ts-ignore */}
							<li style={{ '--color': '#D7FD2E' }}>
								<div className="img">
									<img src="/airline.png" alt="" />
								</div>
								<div className="content">
									<h3>Medium</h3>
									<div className="price">$16</div>
									<ul>
										<li>$20 в месяц</li>
										<li>100 презентаций в месяц</li>
									</ul>
									<button style={{ color: '#404040' }}>Подключить</button>
								</div>
							</li>
							{/* @ts-ignore */}
							<li style={{ '--color': '#2C2C2C' }}>
								<div className="img">
									<img src="/rocket.png" alt="" />
								</div>
								<div className="content">
									<h3>Silver</h3>
									<div className="price">$24</div>
									<ul>
										<li>$30 в месяц</li>
										<li>безлимит презентаций<br />в месяц</li>
									</ul>
									<button>Подключить</button>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	)
}
