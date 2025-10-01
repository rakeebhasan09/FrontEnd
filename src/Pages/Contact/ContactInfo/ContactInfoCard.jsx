import { useRef } from "react";

const ContactInfoCard = ({ title, icon: Icon }) => {
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
			className="py-10 px-12 lg:px-6 xl:px-[50px] xxl:px-[80px] bg-[#141414] rounded-[15px] card"
		>
			<Icon className="text-white text-[80px] md:text-[70px] lg:text-[100px] xl:text-[135px] block mx-auto " />
			<p className="text-[22px] text-center font-rubik font-semibold mt-2 relative z-10 break-all">
				{title}
			</p>
		</div>
	);
};

export default ContactInfoCard;
