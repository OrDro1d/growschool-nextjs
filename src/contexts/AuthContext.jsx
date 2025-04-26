// context/AuthContext.jsx
"use client"; // Обязательно, чтобы этот файл выполнялся на клиенте (Next.js 15)

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(); // Создаем Context без начального значения

export function AuthProvider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Функция для входа, переключает состояние на true
	const login = () => {
		setIsAuthenticated(true);
	};

	// Функция для выхода, переключает состояние на false
	const logout = () => {
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth должен быть использован внутри AuthProvider");
	}
	return context;
}
