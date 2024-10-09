import AlgoVisualizerLanding from "@/components/AlgoVisualizerLanding";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Home() {
	return (
		<div className="flex flex-col dark:text-white w-full justify-between h-screen">
			<Header />
			<main className="flex flex-col gap-6  w-full">
				<AlgoVisualizerLanding />
			</main>
			<Footer />
		</div>
	);
}
