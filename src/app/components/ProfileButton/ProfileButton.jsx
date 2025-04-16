import Image from "next/image";
import styles from "./ProfileButton.module.css";

export default function AccountButton({ children }) {
	return (
		<button className={styles["profile-btn"]}>
			<span>{children}</span>
			<Image
				className={styles["profile-img"]}
				src="/images/unknown-user-profile-pic.jpg"
				alt="Profile picture"
				width={654}
				height={654}
			/>
		</button>
	);
}
