import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import QuickSortVisualizer from "@/components/visualizer/quick-sort-visualizer";

export default function Home() {
	return (
		<div className="flex flex-col w-full justify-between min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white">
			<Header />
			<main className="flex flex-col gap-6 w-full flex-grow">
				<QuickSortVisualizer />
			</main>
			<Footer />
		</div>
	);
}
