/* eslint-disable react/prop-types */
import styles from "./MainButton.module.css";

export default function MainButton({ text, src }) {
	return (
		<a href="#" className={styles["main-btn"]}>
			<span>{text}</span>
			<img src={src}></img>
		</a>
	);
}
