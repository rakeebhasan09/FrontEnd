const ExperienceCard = ({ experience }) => {
	return (
		<div>
			<h5 className="text-brand text-[16px] font-rubik font-medium">
				experience
			</h5>
			<h2 className="text-white text-[24px] font-rajdhani font-bold">
				{experience.company} ({experience.duration})
			</h2>
			<p className="text-white text-[18px] font-rajdhani font-medium  xl:mt-[6px]">
				{experience.role}
			</p>
			<p className="text-[#9F9F9F] text-[16px] font-rubik font-normal lg:mt-2 xl:mt-4">
				{experience.description}
			</p>
		</div>
	);
};

export default ExperienceCard;
