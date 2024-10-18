import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger
} from "@/components/ui/dialog";

interface TutorialProps {
	title: string;
	description: string;
	steps: string[];
}
const Tutorial: React.FC<TutorialProps> = ({ title, description, steps }) => {
	return (
		<Dialog>
			<DialogTrigger asChild disabled title="Coming Soon">
				<button className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition-colors duration-300">
					How It Works
				</button>
			</DialogTrigger>
			<DialogContent className="bg-white text-gray-800">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
					<DialogDescription className="text-gray-600">
						{description}
					</DialogDescription>
				</DialogHeader>
				<div className="mt-4">
					<h3 className="text-lg font-semibold mb-2">Algorithm Steps:</h3>
					<ol className="list-decimal list-inside space-y-2">
						{steps.map((step, index) => (
							<li key={index}>{step}</li>
						))}
					</ol>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default Tutorial;
