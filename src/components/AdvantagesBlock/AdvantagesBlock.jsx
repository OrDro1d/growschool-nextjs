import Image from "next/image";

import styles from "./AdvantagesBlock.module.css";

export default function AdvantagesBlock() {
	return (
		<div className={styles["advantages-background"]}>
			<h2>Преимущества нашей платформы</h2>
			<div className={styles["advantages-block"]}>
				<div className={`${styles["quality"]} ${styles["advantage"]}`}>
					<h3>Качество</h3>
					<p>
						Хоть курсы и создаются независимыми командами, они все проверены и
						соответствуют нашим стандартам качества
					</p>
				</div>
				<div className={`${styles["security"]} ${styles["advantage"]}`}>
					<h3>Безопасность</h3>
					<p>
						Мы заботимся о вашей безопасности и конфиденциальности. Мы собираем
						только необходимые для работы сервиса данные
					</p>
				</div>
				<div className={`${styles["support"]} ${styles["advantage"]}`}>
					<h3>Поддержка</h3>
					<p>
						Мы всегда рядом! Напишите, если у вас возникли трудности и мы
						поможем их преодолеть
					</p>
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
