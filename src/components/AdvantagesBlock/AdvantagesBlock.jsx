import Image from "next/image";

import { poiretOne } from "@/app/layout";

import styles from "./AdvantagesBlock.module.css";

export default function AdvantagesBlock() {
	return (
		<div className={styles["advantages-background"]}>
			<h2 className={poiretOne.className}>Преимущества нашей платформы</h2>
			<div className={styles["advantages-block"]}>
				<div
					className={`${styles["advantage-block"]} ${styles["quality-block"]}`}
				>
					<Image
						className={styles["advantage-img"]}
						src="/images/icons/25.png"
						alt=""
						width={256}
						height={256}
					></Image>
					<div className={styles["advantage"]}>
						<h3 className={poiretOne.className}>Качество</h3>
						<p>
							Хоть курсы и создаются независимыми командами, они все проверены и
							соответствуют нашим стандартам качества
						</p>
					</div>
				</div>
				<div
					className={`${styles["advantage-block"]} ${styles["security-block"]}`}
				>
					<div className={styles["advantage"]}>
						<h3 className={poiretOne.className}>Безопасность</h3>
						<p>
							Мы заботимся о вашей безопасности и конфиденциальности. Мы
							собираем только необходимые для работы сервиса данные
						</p>
					</div>
					<Image
						className={styles["advantage-img"]}
						src="/images/icons/18.png"
						alt=""
						width={256}
						height={256}
					></Image>
				</div>
				<div
					className={`${styles["advantage-block"]} ${styles["support-block"]}`}
				>
					<Image
						className={styles["advantage-img"]}
						src="/images/icons/15.png"
						alt=""
						width={256}
						height={256}
					></Image>
					<div className={styles["advantage"]}>
						<h3 className={poiretOne.className}>Поддержка</h3>
						<p>
							Мы всегда рядом! Напишите, если у вас возникли трудности и мы
							поможем их преодолеть
						</p>
					</div>
				</div>
			</div>
			<Image
				className={styles["chill-guy"]}
				src="/images/chill-guy.png"
				alt=""
				width={432}
				height={432}
			></Image>
		</div>
	);
}
