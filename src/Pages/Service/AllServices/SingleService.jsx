import { VscCode } from "react-icons/vsc";

const SingleService = ({ sservice }) => {
	return (
		<div className="bg-[#141414] p-5 md:p-10 rounded-[10px] md:rounded-[20px]">
			<div className="flex flex-col md:items-center md:flex-row md:gap-3">
				<VscCode className="text-[50px] md:text-[60px] lg:text-[45px] xl:text-[70px]" />
				<h2 className="text-[28px] md:text-[45px] lg:text-[28px] xl:text-[35px] xxl:text-[40px] font-semibold">
					{sservice.title}
				</h2>
			</div>
			<ul className="flex flex-col gap-3 pt-5">
				{sservice.features.map((item) => (
					<li className="text-[18px] md:text-[22px] lg:text-[18px] xl:text-[20px] xxl:text-[22px] font-medium">
						✅ {item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SingleService;
