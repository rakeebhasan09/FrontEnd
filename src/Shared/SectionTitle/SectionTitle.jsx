const SectionTitle = ({ areaTitle, title, subTitle }) => {
	return (
		<div>
			<h6 className="text-[16px] text-brand text-center font-rubik uppercase tracking-[1px] mb-[5px]">
				{areaTitle}
			</h6>
			<h2 className="text-white text-[40px] md:text-[48px] font-bold font-rajdhani text-center max-w-[500px] mx-auto">
				{title}
			</h2>
			<p className="max-w-[630px] mx-auto text-center text-[#9F9F9F] font-rubik">
				{subTitle}
			</p>
		</div>
	);
};

export default SectionTitle;
