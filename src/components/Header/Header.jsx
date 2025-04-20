import Link from "next/link";

import ProfileButton from "../ProfileButton";
import Search from "../Search";
import Logo from "../Logo";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles["header"]}>
			<Logo></Logo>
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
