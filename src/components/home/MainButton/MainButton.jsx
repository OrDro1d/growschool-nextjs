import Image from "next/image";
import Link from "next/link";

import styles from "./MainButton.module.css";

export default function MainButton({ text, src }) {
	return (
		<Link href="#" className={styles["main-btn"]}>
			<span>{text}</span>
			<Image src={src} alt="" width={256} height={256}></Image>
		</Link>
	);
}
