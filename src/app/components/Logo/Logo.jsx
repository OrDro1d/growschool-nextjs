import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={styles["logo-block"]}>
			<img
				className={styles["logo-img"]}
				src="/images/logo.png"
				alt="Logo image"
			/>
			<p className={styles["logo-name"]}>Grow School</p>
		</div>
	);
}
