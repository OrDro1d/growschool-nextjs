import Image from "next/image";

import { poiretOne } from "@/app/layout";

import styles from "./GreetingsBlock.module.css";

export default function GreetingsBlock({ children }) {
	return (
		<div className={styles["greetings-block-background"]}>
			<div className={styles["greetings-block"]}>
				<Image
					src="/images/greetings.jpg"
					width={473}
					height={303}
					alt=""
				></Image>
				<h1 className={poiretOne.className}>
					Добро пожаловать в <br></br>Grow School!
				</h1>
				<p>{children}</p>
			</div>
		</div>
	);
}
