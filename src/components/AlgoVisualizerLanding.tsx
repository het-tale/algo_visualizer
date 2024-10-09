"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription
} from "@/components/ui/card";

const algorithms = [
	{
		name: "Bubble Sort",
		path: "/bubble-sort",
		description: "Visualize the bubble sort algorithm in action."
	},
	{
		name: "Quick Sort",
		path: "/quick-sort",
		description: "See how the quick sort algorithm efficiently sorts data."
	},
	{
		name: "Merge Sort",
		path: "/merge-sort",
		description: "Explore the divide-and-conquer approach of merge sort."
	}
];

const AlgoVisualizerLanding: React.FC = () => {
	return (
		<div className="h-auto">
			<main className="container mx-auto px-4 py-16">
				<motion.h1
					className="text-5xl font-bold mb-8 text-center font-code"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					&lt;AlgoVisualizer /&gt;
				</motion.h1>
				<motion.p
					className="text-xl mb-12 text-center font-sans"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Explore and visualize various sorting algorithms in real-time. Choose
					an algorithm below to get started:
				</motion.p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{algorithms.map((algo, index) => (
						<motion.div
							key={algo.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Link href={algo.path}>
								<Card className="bg-transparent hover:bg-transparent transition-colors duration-300">
									<CardHeader>
										<CardTitle className="text-2xl font-semibold mb-2 font-sans">
											{algo.name}
										</CardTitle>
										<CardDescription className="text-gray-400 font-sans">
											{algo.description}
										</CardDescription>
									</CardHeader>
								</Card>
							</Link>
						</motion.div>
					))}
				</div>
			</main>
		</div>
	);
};

export default AlgoVisualizerLanding;
