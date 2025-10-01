import { useRef } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeatureCard = ({ feature }) => {
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
		<div>
			<div
				ref={cardRef}
				onMouseMove={handleMouseMove}
				className="bg-[#141414] p-7 md:p-10 rounded-[20px] card"
			>
				<div className="relative z-10">
					<span className="text-white text-[18px] font-rajdhani font-bold">
						{feature.title}
					</span>
					<h3 className="text-[48px] text-white font-rajdhani font-bold">
						$ {feature.price}
					</h3>
					<p className="text-white text-[18px] font-rajdhani font-bold mb-5 lg:mb-7">
						{feature.duration}
					</p>
				</div>
				<div className="relative z-10 flex flex-col flex-1">
					<ul className="flex flex-col flex-grow gap-y-3 py-10 border-t-2 border-t-[rgba(157,157,255,0.0509803922)]">
						{feature.features.map((item, idx) => (
							<li
								key={idx}
								className="text-[16px] text-[#9F9F9F] font-rubik font-normal flex items-center gap-2"
							>
								<FaCircleCheck className="text-brand" />
								{item}
							</li>
						))}
					</ul>

					<Link to={"/contact"}>
						<button className="bg-brand border-none outline-none rounded-full px-10 py-3 text-white font-rubik font-medium capitalize">
							get started
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
