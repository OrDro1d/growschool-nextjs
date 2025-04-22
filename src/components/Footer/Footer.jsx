import Image from "next/image";
import Link from "next/link";

import { poiretOne } from "@/app/layout";

import styles from "./Footer.module.css";

import Logo from "../Logo";

export default function Footer() {
	return (
		<footer className={styles["footer"]}>
			<Image
				className={styles["you-can-img"]}
				src="/images/you-can.jpg"
				alt=""
				width={736}
				height={1037}
			></Image>
			<div className={styles["footer-block"]}>
				<div className={styles["footer-block-message"]}>
					<Image
						className={styles["successful-people-img"]}
						src="/images/successful-people.jpg"
						alt=""
						width={476}
						height={449}
					></Image>
					<h2 className={poiretOne.className}>
						Помните: никогда не сдавайтесь и <br></br>у вас обязательно все
						получится!
					</h2>
				</div>
				<div className={styles["footer-block-info"]}>
					<Logo className={styles["logo"]}></Logo>
					<p>
						Предоставляем открытую платформу <br></br>качественного образования
						для работы и жизни
					</p>
					<p>
						г. Симферополь / All World <br></br>10:00–20:00 MSK • GMT +3
					</p>
					<p>
						Контактный центр<br></br>Позвоните нам:&nbsp;
						<Link className={styles["contact-link"]} href="tel:88005553535">
							8 (800) 555-35-35{" "}
						</Link>
						<br></br>
						Напишите нам на почту:&nbsp;
						<Link
							className={styles["contact-link"]}
							href="mailto:hello@grow.school"
						>
							hello@grow.school
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
