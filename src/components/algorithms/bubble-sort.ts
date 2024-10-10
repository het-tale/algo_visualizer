"use client";

import { BarProps } from "../visualizer/bubble-sort-visualizer";

export interface BubbleSortProps {
	setSorting: React.Dispatch<React.SetStateAction<boolean>>;
	setBars: React.Dispatch<React.SetStateAction<BarProps[]>>;
	bars: BarProps[];
	sortingSpeed: number;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async ({
	setSorting,
	setBars,
	bars,
	sortingSpeed,
	setCompleted
}: BubbleSortProps) => {
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
