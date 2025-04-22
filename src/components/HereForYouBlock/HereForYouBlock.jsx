import Image from "next/image";

import { poiretOne } from "@/app/layout";

import styles from "./HereForYouBlock.module.css";

export default function HereForYouBlock() {
	return (
		<div className={styles["here-for-you-background"]}>
			<div className={styles["here-for-you-block"]}>
				<Image
					src="/images/here-for-you.jpg"
					alt=""
					width={1004}
					height={635}
				></Image>
				<h1 className={poiretOne.className}>Платформа - созданная для вас</h1>
				<p>
					Мы знаем не понаслышке насколько это сложно научиться чему-то новому,
					<br></br>
					особенно, если у вас пока нет ничего конкретного, кроме желания.
					<br></br> А потому поддерживаем вас на каждом этапе обучения
				</p>
			</div>
		</div>
	);
}
