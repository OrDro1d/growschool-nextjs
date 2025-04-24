import styles from "./page.module.css";

import GreetingsBlock from "@/components/others/GreetingsBlock";
import MainBlock from "@/components/register/MainBlock";
import Logo from "@/components/others/Logo";

export default function Register() {
	return (
		<>
			<div className={styles["container"]}>
				<GreetingsBlock>
					Зарегистрируйтесь, чтобы начать свое обучение
				</GreetingsBlock>
				<MainBlock></MainBlock>
			</div>
			<Logo className={styles["logo"]}></Logo>
		</>
	);
}
