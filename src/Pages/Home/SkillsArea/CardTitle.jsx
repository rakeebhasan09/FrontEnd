const CardTitle = ({ title }) => {
	return (
		<div className="flex items-center gap-3 md:gap-x-5 lg:gap-x-[30px] mb-4 md:mb-5 lg:mb-[30px]">
			<h2 className="text-white text-[28px] md:text-[32px] font-rajdhani font-bold">
				{title}
			</h2>
			<img className="grayscale" src="custom-line.png" alt="" />
		</div>
	);
};

export default CardTitle;
