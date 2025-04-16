import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={styles["logo-block"]}>
			<Image
				className={styles["logo-img"]}
				src="/images/logo.png"
				alt="Logo image"
				width={3350}
				height={4200}
			/>
			<p className={styles["logo-name"]}>Grow School</p>
		</div>
	);
}
