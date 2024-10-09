const ColorLegend: React.FC = () => {
	return (
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
	);
};

export default ColorLegend;
