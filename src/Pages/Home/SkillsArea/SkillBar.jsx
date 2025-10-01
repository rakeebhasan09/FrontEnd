import { useEffect, useRef, useState } from "react";
const SkillBar = ({ skillName, skillPercentage }) => {
	const barRef = useRef(null);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setAnimate(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		if (barRef.current) observer.observe(barRef.current);

		return () => observer.disconnect();
	}, []);
	return (
		<div ref={barRef}>
			<div>
				<h3 className="text-white text-[14px] uppercase font-rubik mb-[15px] tracking-[1px]">
					{skillName}
				</h3>
				<div className="w-full h-2 bg-[#141414] rounded-lg">
					<div
						className="h-full bg-brand rounded-lg relative flex items-center justify-end px-2 text-xs font-bold text-white transition-all duration-[2000ms] ease-in-out"
						style={{
							width: animate ? skillPercentage : "0%",
						}}
					>
						<h3 className="text-white text-[14px] uppercase font-rubik mb-[15px] tracking-[1px] relative -top-[22px]">
							{skillPercentage}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillBar;
