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
		/>
	);
};

export default BubbleSortVisualizer;
