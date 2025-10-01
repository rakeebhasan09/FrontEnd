import { useRef } from "react";
const CounterCard = ({ ammount, subTitle }) => {
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
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			className="w-full md:w-[calc(50%-15px)] bg-[#141414] rounded-[20px] py-[30px] px-[7px] card"
		>
			<h2 className="text-white text-[48px] font-rajdhani font-black text-center">
				{ammount}
			</h2>
			<p className="text-[#9F9F9F] font-rubik text-center">{subTitle}</p>
		</div>
	);
};

export default CounterCard;
