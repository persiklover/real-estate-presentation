import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.wrapper}>
			<div className="container">
				<div className={styles.inner}>
					<span>Логотип</span>

					<a href="#">Создать презентацию</a>

					<div className={styles.buttons}>
						<Link href="/login">Вход</Link>
						<a href="#">Телефон</a>
					</div>
				</div>
			</div>
		</header>
	)
}
