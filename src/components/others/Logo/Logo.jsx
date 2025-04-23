import Image from "next/image";

import styles from "./Logo.module.css";

export default function Logo({ className }) {
	return (
		<div className={`${styles["logo-block"]}  ${className}`}>
			<Image
				className={styles["logo-img"]}
				src="/images/favicon.ico"
				alt="Logo image"
				width={3350}
				height={4200}
			/>
			<span className={styles["logo-name"]}>Grow School</span>
		</div>
	);
}
