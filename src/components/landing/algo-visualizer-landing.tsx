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
		description: "Visualize the bubble sort algorithm in action.",
		color: "from-pink-500 to-purple-500"
	},
	{
		name: "Quick Sort",
		path: "/quick-sort",
		description: "See how the quick sort algorithm efficiently sorts data.",
		color: "from-green-400 to-blue-500"
	},
	{
		name: "Coming Soon",
		path: "",
		description: "New algorithms coming soon!",
		color: "from-yellow-400 to-orange-500"
	}
];

const AlgoVisualizerLanding: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white">
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(30)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute bg-white rounded-full opacity-10"
						style={{
							width: Math.random() * 100 + 50,
							height: Math.random() * 100 + 50,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`
						}}
						animate={{
							y: [0, Math.random() * 100 - 50],
							x: [0, Math.random() * 100 - 50],
							scale: [1, Math.random() + 0.5]
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Infinity,
							repeatType: "reverse"
						}}
					/>
				))}
			</div>
			<main className="container mx-auto px-4 py-16 relative z-10">
				<motion.h1
					className="text-6xl font-bold mb-8 text-center font-code"
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
								<Card
									className={`bg-gradient-to-br ${algo.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
								>
									<CardHeader>
										<CardTitle className="text-2xl font-semibold mb-2 font-sans text-white">
											{algo.name}
										</CardTitle>
										<CardDescription className="text-white font-sans">
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
