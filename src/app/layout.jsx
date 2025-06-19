import Link from "next/link";

import { AuthProvider } from "../contexts/AuthContext";

import "./globals.css";

export const metadata = {
	title: "Grow School",
	icons: {
		icon: "/images/favicon.ico"
	}
};

import { Teachers, Poiret_One } from "next/font/google";

export const poiretOne = Poiret_One({
	weight: "400",
	subsets: ["cyrillic", "latin"]
});
export const teachers = Teachers({
	weight: "400",
	subsets: ["cyrillic", "latin"]
});

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<AuthProvider>
				<body className={teachers.className}>{children}</body>
			</AuthProvider>
		</html>
	);
}
