import Image from "next/image";
import MainButton from "../MainButton";
import HelpButton from "../HelpButton";
import styles from "./MainBlock.module.css";

export default function MainBlock() {
	return (
		<main className={styles["main"]}>
			<div className={styles["main-block"]}>
				<div className={styles["main-block-text"]}>
					<h1>Каждый день - новый шанс вырасти над собой</h1>
					<p>И мы вам в этом поможем! Чему вы хотите научиться?</p>
				</div>
				<div className={styles["main-block-btns"]}>
					<MainButton
						text="Освоить профессию"
						src="/images/icons/2.png"
					></MainButton>
					<MainButton
						text="Освоить навык"
						src="/images/icons/6.png"
					></MainButton>
					<MainButton text="Все курсы" src="/images/icons/3.png"></MainButton>
					<MainButton
						text="Популярные программы"
						src="/images/icons/1.png"
					></MainButton>
				</div>
				<div className={styles["help-block-text"]}>
					<h2>Если не знаете с чего начать</h2>
					<Image src="/images/look.png" alt="" width={343} height={233}></Image>
				</div>
				<div className={styles["help-block-btns"]}>
					<HelpButton
						text="Узнайте подходящий вам курс"
						src="/images/icons/30.png"
					></HelpButton>
					<HelpButton
						text="Попробуйте наши бесплатные материалы"
						src="/images/icons/31.png"
					></HelpButton>
				</div>
			</div>
			<Image
				className={styles["good-things-grow-here-img"]}
				src="/images/good-things-grow-here.jpg"
				alt=""
				width={736}
				height={953}
			></Image>
		</main>
	);
}
