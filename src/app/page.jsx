import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/home/Header";
import MainBlock from "@/components/home/MainBlock";
import HereForYouBlock from "@/components/home/HereForYouBlock";
import AdvantagesBlock from "@/components/home/AdvantagesBlock";
import Footer from "@/components/home/Footer";

export default function Home() {
	return (
		<>
			<Header></Header>
			<MainBlock></MainBlock>
			<HereForYouBlock></HereForYouBlock>
			<AdvantagesBlock></AdvantagesBlock>
			<Footer></Footer>
		</>
	);
}
