"use client";

import Link from "next/link";

import styles from "./MainBlock.module.css";

import { Poiret_One } from "next/font/google";

const poiretOne = Poiret_One({ weight: "400" });

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MainBlock() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password })
			});
			const data = await res.json();
			if (res.ok) {
				localStorage.setItem("token", data.token);
				router.push("/");
			} else {
				setError(data.error);
			}
		} catch (err) {
			setError("Что-то пошло не так. Попробуйте ещё раз.");
		}
	};

	return (
		<main className={styles["register-block"]}>
			<h1 className={poiretOne.className}>Вход</h1>
			<form onSubmit={handleSubmit}>
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
						placeholder="Введите ваш пароль"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<p className={styles["error-message"]}>{error}</p>
				<button className={styles["register-btn"]} type="submit">
					Войти
				</button>
				<p className={styles["to-register-block"]}>
					<span>Ещё не зарегистрированы?</span>
					<Link className={styles["to-register-link"]} href="/auth/register">
						Зарегистрироваться
					</Link>
				</p>
			</form>
		</main>
	);
}
