import { Teachers, Poiret_One } from "next/font/google";
import "./globals.css";

const teachers = Teachers({ style: "normal" });

const poiretOne = Poiret_One({
	style: "normal",
	weight: "400"
});

export const metadata = {
	title: "Grow School"
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={`${teachers.className} ${poiretOne.className}`}>
				{children}
			</body>
		</html>
	);
}
