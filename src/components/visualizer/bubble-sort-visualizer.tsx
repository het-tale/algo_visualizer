"use client";

import React from "react";

import { bubbleSort } from "../algorithms/bubble-sort";
import SortAlgoVisualizer from "./sort-algo-visualizer";

export interface BarProps {
	value: number;
	state: "default" | "comparing" | "sorted" | "swapping";
}

const BubbleSortVisualizer: React.FC = () => {
	return (
		<SortAlgoVisualizer
			title="Bubble Sort Visualizer"
			sortAlgorithm={bubbleSort}
			tutorialTitle="Bubble Sort Tutorial"
			tutorialDescription="Bubble Sort is a simple sorting algorithm that repeatedly steps
						through the list, compares adjacent elements and swaps them if they
						are in the wrong order."
			tutorialSteps={[
				"Start with an unsorted array of n elements.",
				"Compare adjacent elements, swapping them if they are in the wrong order.",
				"Repeat step 2 for each pair of adjacent elements, from the beginning of the array to the end.",
				"After each pass, the largest unsorted element 'bubbles up' to its correct position.",
				"Repeat steps 2-4 for n-1 passes, where n is the number of elements in the array."
			]}
		/>
	);
};

export default BubbleSortVisualizer;
