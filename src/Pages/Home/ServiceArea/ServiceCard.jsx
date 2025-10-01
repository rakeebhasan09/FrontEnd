const ServiceCard = ({ service }) => {
	const { image, title, subTitle } = service;
	return (
		<div className="py-10 border-[1px] border-[rgba(255,73,74,0.16)] rounded-[20px] flex flex-col items-center gap-y-[10px]">
			<div className="h-16">
				<img className="w-16 h-14 object-contain" src={image} alt="" />
			</div>
			<h2 className="text-white text-[24px] font-rajdhani font-bold transition-all duration-300 hover:text-brand relative after:absolute after:w-0 after:h-[3px] after:bg-brand after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">
				{title}
			</h2>
			<p className="text-[#9F9F9F] font-rubik">{subTitle}</p>
		</div>
	);
};

export default ServiceCard;
