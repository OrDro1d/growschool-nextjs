import Image from "next/image";
import styles from "./HereForYouBlock.module.css";

export default function HereForYouBlock() {
	return (
		<div className={styles["here-for-you-background"]}>
			<div className={styles["here-for-you-block"]}>
				<Image
					src="/images/here-for-you.png"
					alt=""
					width={1004}
					height={635}
				></Image>
				<h2>Платформа - созданная для вас</h2>
				<p>
					Мы знаем не понаслышке насколько это сложно научиться чему-то новому,
					особенно, если у вас пока нет ничего конкретного, кроме желания. А
					потому поддерживаем вас <br></br>на каждом этапе обучения
				</p>
			</div>
		</div>
	);
}
