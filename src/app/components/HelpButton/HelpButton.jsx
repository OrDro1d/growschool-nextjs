import Image from "next/image";
import styles from "./HelpButton.module.css";

export default function MainButton({ text, src }) {
	return (
		<a href="#" className={styles["help-btn"]}>
			<span>{text}</span>
			<Image src={src} alt="" width={256} height={256}></Image>
		</a>
	);
}
