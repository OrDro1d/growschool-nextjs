"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "../../../contexts/AuthContext";

import styles from "./ProfileButton.module.css";

export default function AccountButton() {
	const { isAuthenticated } = useAuth();
	return (
		<Link
			className={styles["profile-btn"]}
			href={isAuthenticated ? "#" : "/auth/login"}
		>
			<span>{isAuthenticated ? "Мой профиль" : "Войти"}</span>
			<Image
				className={styles["profile-img"]}
				src={
					isAuthenticated
						? "/images/icons/known-user.jpg"
						: "/images/icons/unknown-user.jpg"
				}
				alt="Profile picture"
				width={654}
				height={654}
			/>
		</Link>
	);
}
