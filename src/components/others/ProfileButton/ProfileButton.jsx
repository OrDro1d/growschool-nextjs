"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ProfileButton.module.css";

export default function AccountButton({ children }) {
	return (
		<Link className={styles["profile-btn"]} href="/auth/login">
			<span>{children}</span>
			<Image
				className={styles["profile-img"]}
				src="/images/unknown-user-profile-pic.jpg"
				alt="Profile picture"
				width={654}
				height={654}
			/>
		</Link>
	);
}
