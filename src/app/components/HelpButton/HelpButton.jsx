/* eslint-disable react/prop-types */
import styles from "./HelpButton.module.css";

export default function MainButton({ text, src }) {
	return (
		<a href="#" className={styles["help-btn"]}>
			<span>{text}</span>
			<img src={src}></img>
		</a>
	);
}
