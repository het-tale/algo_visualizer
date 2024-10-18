import { BubbleSortProps, sleep } from "./bubble-sort";
import { BarProps } from "../visualizer/bubble-sort-visualizer";

async function quickSortHelper(
	arr: BarProps[],
	low: number,
	high: number,
	setBars: React.Dispatch<React.SetStateAction<BarProps[]>>,
	sortingSpeed: number
): Promise<void> {
	if (low < high) {
		const pivotIndex = await partition(arr, low, high, setBars, sortingSpeed);
		await quickSortHelper(arr, low, pivotIndex - 1, setBars, sortingSpeed);
		await quickSortHelper(arr, pivotIndex + 1, high, setBars, sortingSpeed);
	}
}

async function partition(
	arr: BarProps[],
	low: number,
	high: number,
	setBars: React.Dispatch<React.SetStateAction<BarProps[]>>,
	sortingSpeed: number
): Promise<number> {
	const pivot = arr[high].value;
	arr[high].state = "comparing";
	setBars([...arr]);
	await sleep(sortingSpeed);

	let i = low - 1;

	for (let j = low; j < high; j++) {
		arr[j].state = "comparing";
		setBars([...arr]);
		await sleep(sortingSpeed);

		if (arr[j].value < pivot) {
			i++;
			arr[i].state = "swapping";
			arr[j].state = "swapping";
			setBars([...arr]);
			await sleep(sortingSpeed);

			[arr[i], arr[j]] = [arr[j], arr[i]];
			setBars([...arr]);
			await sleep(sortingSpeed);

			arr[i].state = "default";
			arr[j].state = "default";
		} else {
			arr[j].state = "default";
		}
		setBars([...arr]);
		await sleep(sortingSpeed);
	}

	arr[i + 1].state = "swapping";
	arr[high].state = "swapping";
	setBars([...arr]);
	await sleep(sortingSpeed);

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	arr[i + 1].state = "sorted";
	arr[high].state = "default";
	setBars([...arr]);
	await sleep(sortingSpeed);

	return i + 1;
}

export const quickSort = async ({
	setSorting,
	setBars,
	bars,
	sortingSpeed,
	setCompleted
}: BubbleSortProps) => {
	setSorting(true);
	const newBars = [...bars];

	await quickSortHelper(newBars, 0, newBars.length - 1, setBars, sortingSpeed);

	for (let i = 0; i < newBars.length; i++) {
		newBars[i].state = "sorted";
		setBars([...newBars]);
		await sleep(sortingSpeed / 2);
	}

	setBars([...newBars]);
	setSorting(false);
	setCompleted(true);
};
