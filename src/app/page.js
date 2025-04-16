import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/app/components/Header";
import MainBlock from "@/app/components/MainBlock";
import HereForYouBlock from "@/app/components/HereForYouBlock";
import AdvantagesBlock from "@/app/components/AdvantagesBlock";

export default function App() {
	return (
		<>
			<Header></Header>
			<MainBlock></MainBlock>
			<HereForYouBlock></HereForYouBlock>
			<AdvantagesBlock></AdvantagesBlock>
		</>
	);
}
