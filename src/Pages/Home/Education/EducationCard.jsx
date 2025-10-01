import { useRef } from "react";

const EducationCard = ({ education }) => {
	const cardRef = useRef(null);

	const handleMouseMove = (e) => {
		const rect = cardRef.current.getBoundingClientRect();
		const mouseX = e.clientX - rect.left - rect.width / 2;
		const mouseY = e.clientY - rect.top - rect.height / 2;

		let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
		angle = (angle + 360) % 360;

		cardRef.current.style.setProperty("--start", angle + 60);
	};
	return (
		<div ref={cardRef} onMouseMove={handleMouseMove} className="card">
			<div className="p-5 md:p-8 lg:py-9 lg:px-7 xl:py-[50px] xl:px-10 bg-[#141414] rounded-xl md:rounded-[20px]">
				<p className="text-white text-[16px] font-rubik">
					{education.title}
				</p>
				<h2 className="text-white text-[18px] font-rajdhani font-bold mt-[5px] mb-3 md:mb-[18px]">
					{education.duration}
				</h2>
				<p className="text-[#9F9F9F] text-[16px] font-rubik font-normal">
					{education.description}
				</p>
			</div>
		</div>
	);
};

export default EducationCard;
