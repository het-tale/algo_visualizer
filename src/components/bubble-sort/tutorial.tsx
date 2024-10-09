import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger
} from "@/components/ui/dialog";

const Tutorial: React.FC = () => {
	return (
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
						through the list, compares adjacent elements and swaps them if they
						are in the wrong order.
					</DialogDescription>
				</DialogHeader>
				<div className="mt-4">
					<h3 className="text-lg font-semibold mb-2">Algorithm Steps:</h3>
					<ol className="list-decimal list-inside space-y-2">
						<li>Start with an unsorted array of n elements.</li>
						<li>
							Compare adjacent elements, swapping them if they are in the wrong
							order.
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
							Repeat steps 2-4 for n-1 passes, where n is the number of elements
							in the array.
						</li>
					</ol>
					<p className="mt-4">
						The algorithm gets its name from the way smaller elements
						&quot;bubble&quot; to the top of the list with each iteration.
					</p>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default Tutorial;
