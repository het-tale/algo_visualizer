"use client";

import React from "react";

import SortAlgoVisualizer from "./sort-algo-visualizer";
import { quickSort } from "../algorithms/quick-sort";

export interface BarProps {
	value: number;
	state: "default" | "comparing" | "sorted" | "swapping";
}

const QuickSortVisualizer: React.FC = () => {
	return (
		<SortAlgoVisualizer
			title="Quick Sort Visualizer"
			sortAlgorithm={quickSort}
			tutorialTitle="Quick Sort Tutorial"
			tutorialDescription="Quick Sort is a comparison-based sorting algorithm that uses a divide-and-conquer strategy to sort an array."
			tutorialSteps={[]}
		/>
	);
};

export default QuickSortVisualizer;
