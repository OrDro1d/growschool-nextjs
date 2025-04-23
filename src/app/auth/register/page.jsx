import styles from "./page.module.css";

import GreetingsBlock from "@/components/register/GreetingsBlock";
import MainBlock from "@/components/register/MainBlock";
import Logo from "@/components/others/Logo";
import GreenBall from "@/components/register/GreenBall";

export default function Register() {
	return (
		<>
			<div className={styles["container"]}>
				<GreetingsBlock></GreetingsBlock>
				<MainBlock></MainBlock>
			</div>
			<Logo className={styles["logo"]}></Logo>
			{/* <GreenBall className={styles["green-ball"]}></GreenBall> */}
		</>
	);
}
