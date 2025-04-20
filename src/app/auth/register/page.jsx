"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password })
			});
			const data = await res.json();
			if (res.ok) {
				// После успешной регистрации переходим на страницу входа
				router.push("/auth/login");
			} else {
				setError(data.error);
			}
		} catch (err) {
			setError("Что-то пошло не так. Попробуйте ещё раз.");
		}
	};

	return (
		<div style={{ maxWidth: "400px", margin: "2rem auto" }}>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: "1rem" }}>
					<label>Имя:</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						style={{ width: "100%" }}
					/>
				</div>
				<div style={{ marginBottom: "1rem" }}>
					<label>Email:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						style={{ width: "100%" }}
					/>
				</div>
				<div style={{ marginBottom: "1rem" }}>
					<label>Пароль:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						style={{ width: "100%" }}
					/>
				</div>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
}
