"use client";

import styles from "./MainBlock.module.css";

import { Poiret_One } from "next/font/google";

const poiretOne = Poiret_One({ weight: "400" });

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MainBlock() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			if (password != confirmPassword)
				throw new Error("Пароли не совпадают! Попробуйте ещё раз!");

			const result = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password })
			});
			const data = await result.json();
			if (result.ok) {
				router.push("/auth/login");
			} else {
				setError(data.error);
			}
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<main className={styles["register-block"]}>
			<h1 className={poiretOne.className}>Регистрация</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles["name-block"]}>
					<label>Имя</label>
					<br></br>
					<input
						type="text"
						value={name}
						placeholder="Введите ваше имя"
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className={styles["email-block"]}>
					<label>Email</label>
					<br></br>
					<input
						type="email"
						value={email}
						placeholder="Введите вашу эл. почту"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={styles["password-block"]}>
					<label>Пароль</label>
					<br></br>
					<input
						type="password"
						value={password}
						placeholder="Придумайте пароль"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className={styles["password-again-block"]}>
					<label>Подтверждение пароля</label>
					<br></br>
					<input
						type="password"
						value={confirmPassword}
						placeholder="Повторите ваш пароль"
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<p className={styles["error-message"]}>{error}</p>
				<button className={styles["register-btn"]} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</main>
	);
}
