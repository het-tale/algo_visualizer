interface SliderProps {
	value: number;
	onChange: (value: number) => void;
	min: number;
	max: number;
	id: string;
	title: string;
	state: boolean;
}

const Slider: React.FC<SliderProps> = ({
	value,
	onChange,
	title,
	min,
	max,
	id,
	state
}) => {
	return (
		<div className="flex items-center gap-4 w-full">
			<label htmlFor={id} className="w-full">
				{`${title}: ${value}`}
			</label>
			<input
				type="range"
				id={id}
				min={min}
				max={max}
				value={value}
				onChange={(e) => onChange(Number(e.target.value))}
				disabled={state}
				className="w-full"
			/>
		</div>
	);
};

export default Slider;
