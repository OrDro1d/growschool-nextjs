import styles from "./GreenBall.module.css";

export default function GreenBall({ className }) {
	return <div className={`${styles["green-ball"]} ${className}`}></div>;
}
