/* eslint-disable react/prop-types */
import styles from "./ProfileButton.module.css";

export default function AccountButton({ children }) {
	return (
		<button className={styles["profile-btn"]}>
			<span>{children}</span>
			<img
				className={styles["profile-img"]}
				src="/images/unknown-user-profile-pic.jpg"
				alt="Profile picture"
			/>
		</button>
	);
}
