import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

const ServiceBanner = () => {
	return (
		<section className="pt-24 pb-16 md:pt-[120px] md:pb-[60px] xl:pt-[150px] xl:pb-[70px] bg-[url('https://i.ibb.co.com/JjFdpkfw/about-breadcum-bg.png')] bg-no-repeat bg-center bg-cover">
			<h2 className="text-center text-white text-[40px] font-rubik font-bold lg:mb-[15px]">
				Services
			</h2>
			<ul className="flex items-center justify-center gap-2">
				<li>
					<Link
						to={"/"}
						className="font-rubik capitalize transition-all duration-200 hover:text-brand"
					>
						home
					</Link>
				</li>
				<li>
					<GoChevronRight />
				</li>
				<li className="font-rubik capitalize text-brand">services</li>
			</ul>
		</section>
	);
};

export default ServiceBanner;
