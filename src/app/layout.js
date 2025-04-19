import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: "Grow School"
};

import { Teachers, Poiret_One } from "next/font/google";

export const poiretOne = Poiret_One({ weight: "400" });
export const teachers = Teachers({ weight: "700" });

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={`${poiretOne.className} ${teachers.className}`}>
				{children}
			</body>
		</html>
	);
}
