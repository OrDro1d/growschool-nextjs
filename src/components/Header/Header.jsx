import ProfileButton from "../ProfileButton";
import Search from "../Search";
import Button from "../Button";
import Logo from "../Logo";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles["header"]}>
			<Logo></Logo>
			<nav>
				<Search></Search>
				<Button>Мои курсы</Button>
				<Button>Мой прогресс</Button>
				<ProfileButton>Войти</ProfileButton>
			</nav>
		</header>
	);
}
