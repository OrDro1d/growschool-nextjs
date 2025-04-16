import styles from "./HereForYouBlock.module.css";

export default function HereForYouBlock() {
	return (
		<div className={styles["here-for-you-background"]}>
			<div className={styles["here-for-you-block"]}>
				<img src="/images/here-for-you.png"></img>
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
