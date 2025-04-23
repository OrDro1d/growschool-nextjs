import Link from "next/link";

import ProfileButton from "../../others/ProfileButton";
import Search from "../../home/Search";
import Logo from "../../others/Logo";

import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles["header"]}>
			<Logo className={styles["logo"]}></Logo>
			<nav>
				<Search></Search>
				<Link className={styles["navbar-btn"]} href="#">
					Мои курсы
				</Link>
				<Link className={styles["navbar-btn"]} href="#">
					Мой прогресс
				</Link>
				<ProfileButton>Войти</ProfileButton>
			</nav>
		</header>
	);
}
