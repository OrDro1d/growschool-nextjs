import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/Header";
import MainBlock from "@/components/MainBlock";
import HereForYouBlock from "@/components/HereForYouBlock";
import AdvantagesBlock from "@/components/AdvantagesBlock";

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
