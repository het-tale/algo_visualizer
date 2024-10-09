"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger
} from "@/components/ui/dialog";

interface BarProps {
	value: number;
	state: "default" | "comparing" | "sorted" | "swapping";
}

const BubbleSortVisualizer: React.FC = () => {
	const [bars, setBars] = useState<BarProps[]>([]);
	const [sorting, setSorting] = useState(false);
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		generateRandomArray();
	}, []);

	const generateRandomArray = () => {
		const newBars = Array.from({ length: 10 }, () => ({
			value: Math.floor(Math.random() * 100) + 1,
			state: "default" as const
		}));
		setBars(newBars);
		setCompleted(false);
	};

	const sleep = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

	const bubbleSort = async () => {
		setSorting(true);
		const n = bars.length;
		const newBars = [...bars];

		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				// Set comparing state
				newBars[j].state = "comparing";
				newBars[j + 1].state = "comparing";
				setBars([...newBars]);
				await sleep(200);

				if (newBars[j].value > newBars[j + 1].value) {
					// Set swapping state
					newBars[j].state = "swapping";
					newBars[j + 1].state = "swapping";
					setBars([...newBars]);
					await sleep(200);

					// Swap elements
					[newBars[j], newBars[j + 1]] = [newBars[j + 1], newBars[j]];
				}

				// Reset state to default
				newBars[j].state = "default";
				newBars[j + 1].state = "default";
			}
			// Set the last element as sorted
			newBars[n - i - 1].state = "sorted";
		}
		// Set the first element as sorted
		newBars[0].state = "sorted";

		setBars([...newBars]);
		setSorting(false);
		setCompleted(true);
	};

	const getBarColor = (state: BarProps["state"]) => {
		switch (state) {
			case "comparing":
				return "bg-red-500";
			case "sorted":
				return "bg-green-500";
			case "swapping":
				return "bg-purple-500";
			default:
				return "bg-blue-500";
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
			<h1 className="text-3xl font-bold mb-8">Bubble Sort Visualizer</h1>
			<div className="flex items-end justify-center h-64 mb-8">
				{bars.map((bar, index) => (
					<motion.div
						key={index}
						className={`w-8 mx-1 ${getBarColor(bar.state)}`}
						style={{ height: `${bar.value * 2}px` }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<div className="text-center text-white">{bar.value}</div>
					</motion.div>
				))}
			</div>
			<div className="space-x-4">
				<button
					className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
					onClick={bubbleSort}
					disabled={sorting || completed}
				>
					{sorting ? "Sorting..." : completed ? "Sorted!" : "Start Sorting"}
				</button>
				<button
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					onClick={generateRandomArray}
					disabled={sorting}
				>
					Generate New Array
				</button>
				<Dialog>
					<DialogTrigger asChild>
						<button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
							How It Works
						</button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Bubble Sort Tutorial</DialogTitle>
							<DialogDescription>
								Bubble Sort is a simple sorting algorithm that repeatedly steps
								through the list, compares adjacent elements and swaps them if
								they are in the wrong order.
							</DialogDescription>
						</DialogHeader>
						<div className="mt-4">
							<h3 className="text-lg font-semibold mb-2">Algorithm Steps:</h3>
							<ol className="list-decimal list-inside space-y-2">
								<li>Start with an unsorted array of n elements.</li>
								<li>
									Compare adjacent elements, swapping them if they are in the
									wrong order.
								</li>
								<li>
									Repeat step 2 for each pair of adjacent elements, from the
									beginning of the array to the end.
								</li>
								<li>
									After each pass, the largest unsorted element &quot;bubbles
									up&quot; to its correct position.
								</li>
								<li>
									Repeat steps 2-4 for n-1 passes, where n is the number of
									elements in the array.
								</li>
							</ol>
							<p className="mt-4">
								The algorithm gets its name from the way smaller elements
								&quot;bubble&quot; to the top of the list with each iteration.
							</p>
						</div>
					</DialogContent>
				</Dialog>
			</div>
			<div className="mt-8 text-center">
				<h2 className="text-xl font-semibold mb-2">Color Legend</h2>
				<div className="flex justify-center space-x-4">
					<div className="flex items-center">
						<div className="w-4 h-4 bg-blue-500 mr-2"></div>
						<span>Default</span>
					</div>
					<div className="flex items-center">
						<div className="w-4 h-4 bg-red-500 mr-2"></div>
						<span>Comparing</span>
					</div>
					<div className="flex items-center">
						<div className="w-4 h-4 bg-purple-500 mr-2"></div>
						<span>Swapping</span>
					</div>
					<div className="flex items-center">
						<div className="w-4 h-4 bg-green-500 mr-2"></div>
						<span>Sorted</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BubbleSortVisualizer;
