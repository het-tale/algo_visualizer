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
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface BarProps {
	value: number;
	state: "default" | "comparing" | "sorted" | "swapping";
}

const BubbleSortVisualizer: React.FC = () => {
	const [bars, setBars] = useState<BarProps[]>([]);
	const [sorting, setSorting] = useState(false);
	const [completed, setCompleted] = useState(false);
	const [arraySize, setArraySize] = useState(10);
	const [sortingSpeed, setSortingSpeed] = useState(100);

	useEffect(() => {
		generateRandomArray();
	}, [arraySize]);

	const generateRandomArray = () => {
		const newBars = Array.from({ length: arraySize }, () => ({
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
				newBars[j].state = "comparing";
				newBars[j + 1].state = "comparing";
				setBars([...newBars]);
				await sleep(sortingSpeed);

				if (newBars[j].value > newBars[j + 1].value) {
					newBars[j].state = "swapping";
					newBars[j + 1].state = "swapping";
					setBars([...newBars]);
					await sleep(sortingSpeed);

					[newBars[j], newBars[j + 1]] = [newBars[j + 1], newBars[j]];
				}

				newBars[j].state = "default";
				newBars[j + 1].state = "default";
			}
			newBars[n - i - 1].state = "sorted";
		}
		newBars[0].state = "sorted";

		setBars([...newBars]);
		setSorting(false);
		setCompleted(true);
	};

	const getBarColor = (state: BarProps["state"]) => {
		switch (state) {
			case "comparing":
				return "bg-yellow-400";
			case "sorted":
				return "bg-green-400";
			case "swapping":
				return "bg-pink-500";
			default:
				return "bg-blue-400";
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white">
			<h1 className="text-4xl font-bold mb-8 font-code">
				&lt;Bubble Sort Visualizer /&gt;
			</h1>
			<div className="flex items-end justify-center h-64 mb-8">
				{bars.map((bar, index) => (
					<TooltipProvider key={index}>
						<Tooltip>
							<TooltipTrigger>
								<motion.div
									key={index}
									className={cn(
										`mx-0.5 ${getBarColor(bar.state)} rounded-t-lg`,
										arraySize < 15 ? "w-6" : "w-2"
									)}
									style={{ height: `${bar.value * 2}px` }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.01 }}
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>{`Value: ${bar.value}`}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				))}
			</div>
			<div className="space-y-4 w-full max-w-md">
				<div className="flex items-center justify-between">
					<label htmlFor="arraySize">Array Size: {arraySize}</label>
					<input
						type="range"
						id="arraySize"
						min="5"
						max="100"
						value={arraySize}
						onChange={(e) => setArraySize(Number(e.target.value))}
						disabled={sorting}
						className="w-2/3"
					/>
				</div>
				<div className="flex items-center justify-between">
					<label htmlFor="sortingSpeed">Sorting Speed: {sortingSpeed}ms</label>
					<input
						type="range"
						id="sortingSpeed"
						min="10"
						max="1000"
						value={sortingSpeed}
						onChange={(e) => setSortingSpeed(Number(e.target.value))}
						disabled={sorting}
						className="w-2/3"
					/>
				</div>
			</div>
			<div className="space-x-4 mt-4">
				<button
					className="px-4 py-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition-colors duration-300"
					onClick={bubbleSort}
					disabled={sorting || completed}
				>
					{sorting ? "Sorting..." : completed ? "Sorted!" : "Start Sorting"}
				</button>
				<button
					className="px-4 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300"
					onClick={generateRandomArray}
					disabled={sorting}
				>
					Generate New Array
				</button>
				<Dialog>
					<DialogTrigger asChild>
						<button className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition-colors duration-300">
							How It Works
						</button>
					</DialogTrigger>
					<DialogContent className="bg-white text-gray-800">
						<DialogHeader>
							<DialogTitle className="text-2xl font-bold">
								Bubble Sort Tutorial
							</DialogTitle>
							<DialogDescription className="text-gray-600">
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
						<div className="w-4 h-4 bg-blue-400 mr-2 rounded"></div>
						<span>Default</span>
					</div>
					<div className="flex items-center">
						<div className="w-4 h-4 bg-yellow-400 mr-2 rounded"></div>
						<span>Comparing</span>
					</div>
					<div className="flex items-center">
						<div className="w-4 h-4 bg-pink-500 mr-2 rounded"></div>
						<span>Swapping</span>
					</div>
					<div className="flex items-center">
						<div className="w-4 h-4 bg-green-400 mr-2 rounded"></div>
						<span>Sorted</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BubbleSortVisualizer;
