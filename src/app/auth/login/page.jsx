import styles from "./page.module.css";

import GreetingsBlock from "@/components/others/GreetingsBlock";
import MainBlock from "@/components/login/MainBlock";
import Logo from "@/components/others/Logo";

export default function Login() {
	return (
		<>
			<div className={styles["container"]}>
				<GreetingsBlock>Войдите, чтобы продолжить свое обучение</GreetingsBlock>
				<MainBlock></MainBlock>
			</div>
			<Logo className={styles["logo"]}></Logo>
		</>
	);
}
