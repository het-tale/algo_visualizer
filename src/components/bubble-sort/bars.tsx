import { BarProps } from "../visualizer/bubble-sort-visualizer";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

interface BarsProps {
	bars: BarProps[];
	arraySize: number;
}
const Bars: React.FC<BarsProps> = ({ bars, arraySize }) => {
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
	);
};

export default Bars;
