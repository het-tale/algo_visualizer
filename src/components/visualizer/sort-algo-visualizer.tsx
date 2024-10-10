"use client";

import React, { useState, useEffect } from "react";

import ColorLegend from "../bubble-sort/color-legend";
import Tutorial from "../bubble-sort/tutorial";
import { BubbleSortProps } from "../algorithms/bubble-sort";
import Bars from "../bubble-sort/bars";
import Slider from "../bubble-sort/slider";
import { BarProps } from "./bubble-sort-visualizer";

interface SortAlgoVisualizerProps {
	title: string;
	sortAlgorithm: (props: BubbleSortProps) => void;
}

const SortAlgoVisualizer: React.FC<SortAlgoVisualizerProps> = ({
	title,
	sortAlgorithm
}) => {
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

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white">
			<h1 className="text-4xl font-bold mb-8 font-code">&lt;{title} /&gt;</h1>
			<Bars bars={bars} arraySize={arraySize} />
			<div className="space-y-4 w-full max-w-md">
				<Slider
					value={arraySize}
					onChange={setArraySize}
					min={5}
					max={100}
					id="arraySize"
					title="Array Size"
					state={sorting}
				/>
				<Slider
					value={sortingSpeed}
					onChange={setSortingSpeed}
					min={10}
					max={1000}
					id="sortingSpeed"
					title="Sorting Speed"
					state={sorting}
				/>
			</div>
			<div className="space-x-4 mt-4">
				<button
					className="px-4 py-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition-colors duration-300"
					onClick={() =>
						sortAlgorithm({
							setSorting,
							setBars,
							bars,
							sortingSpeed,
							setCompleted
						})
					}
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
				<Tutorial
					title="Bubble Sort Tutorial"
					description="Bubble Sort is a simple sorting algorithm that repeatedly steps
						through the list, compares adjacent elements and swaps them if they
						are in the wrong order."
					steps={[
						"Start with an unsorted array of n elements.",
						"Compare adjacent elements, swapping them if they are in the wrong order.",
						"Repeat step 2 for each pair of adjacent elements, from the beginning of the array to the end.",
						"After each pass, the largest unsorted element 'bubbles up' to its correct position.",
						"Repeat steps 2-4 for n-1 passes, where n is the number of elements in the array."
					]}
				/>
			</div>
			<ColorLegend />
		</div>
	);
};

export default SortAlgoVisualizer;
