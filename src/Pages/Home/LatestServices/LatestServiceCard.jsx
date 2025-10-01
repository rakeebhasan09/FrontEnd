import { useRef } from "react";

const LatestServiceCard = ({ portfolioData, idx }) => {
	const { title, description } = portfolioData;
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
			<div className="py-5 px-5 md:py-9 md:px-10 rounded-[20px] bg-[#141414]">
				<h2 className="text-white text-[24px] font-rajdhani font-bold flex items-center gap-x-3">
					<span>{idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}.</span>{" "}
					{title}
				</h2>
				<p className="text-[#9F9F9F] font-rubik md:mt-[22px]">
					{description}
				</p>
			</div>
		</div>
	);
};

export default LatestServiceCard;
