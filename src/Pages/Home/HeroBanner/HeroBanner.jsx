import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";

const HeroBanner = () => {
	return (
		<div>
			<div className="bg-[url('https://i.ibb.co.com/WpHTVz9x/banner-background-one.jpg')] bg-no-repeat bg-cover bg-center pt-24 md:pt-[110px] lg:pt-[120px]">
				<div className="container">
					<div className="flex flex-col gap-y-8 lg:flex-row items-center">
						<div className="w-full lg:w-1/2">
							<div className="content">
								<span className="text-white text-[28px] font-rajdhani font-bold uppercase">
									hello
								</span>
								<h1 className="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[54px] xl:text-[65px] xxl:text-[68px] font-rajdhani font-bold">
									I'm Rakeeb Hasan a
								</h1>
								<div className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[45px] xl:text-[55px] xxl:text-[68px]">
									<TypeWriterEffect
										textStyle={{
											fontFamily: "Rajdhani",
											color: "#FF014F",
											fontWeight: 700,
										}}
										cursorColor="#3F3D56"
										multiText={[
											"Web Designer.",
											"Front End Developer.",
											"React Js Developer.",
											"MERN Developer.",
											"Freelancer.",
										]}
										multiTextDelay={1000}
										typeSpeed={30}
										multiTextLoop={true}
									/>
								</div>

								<p className="text-[#9F9F9F] mt-[10px] mb-[20px] lg:mt-[15px] lg:mb-[39px] text-[18px] font-rubik max-w-[620px]">
									Building sleek, modern, and user-friendly
									web applications with passion and precision.
									Passionate about design, obsessed with
									performance, and focused on results.
								</p>
								<div className="flex flex-col md:flex-row items-center gap-4">
									<Link to={"/projects"}>
										<button className="group px-[30px] h-14 flex items-center gap-1 text-white text-[16px] bg-brand font-rubik font-medium capitalize rounded-[50px]">
											<GoArrowRight className="text-[20px] hidden group-hover:inline-block transition-all duration-300 transform group-hover:translate-x-0 group-hover:opacity-100" />
											<span>View Portfolio</span>
											<GoArrowRight className="text-[20px] group-hover:hidden transition-all duration-300 transform group-hover:translate-x-2 group-hover:opacity-0" />
										</button>
									</Link>
									<a
										href="/updated-designer-cv.pdf"
										download={"/updated-designer-cv.pdf"}
										className="group px-[30px] h-14 flex items-center gap-1 text-white text-[16px] border border-brand font-rubik font-medium capitalize rounded-[50px]"
									>
										Download CV
									</a>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2">
							<div className="my-image relative">
								<div>
									<img
										className="block mx-auto xl:!ml-auto xl:mr-0 z-10 relative"
										src="https://i.ibb.co.com/9mzCC32q/banner-user-image-one.png"
										alt="MD RAKEEB HASAN"
									/>
								</div>
								{/* Bottom Text */}
								<div className="absolute bottom-0 sm:bottom-2 md:bottom-3 left-2/4 -translate-x-2/4 xl:left-3/4 xl:-translate-x-3/4 xxl:left-auto xxl:-translate-x-0 xxl:-right-7 z-10">
									<h2 className="text-[45px] sm:text-[70px] whitespace-nowrap md:text-[80px] lg:text-[70px] xl:text-[80px] xxl:text-[90px] font-rajdhani font-bold custom-stroke">
										WEB DESIGNER
									</h2>
								</div>
								{/* Top Text */}
								<div className="absolute top-24 sm:top-48 md:top-48 left-2/4 -translate-x-2/4 xl:left-3/4 xl:-translate-x-3/4 xxl:left-auto xxl:-translate-x-0 xxl:-right-7 z-0">
									<h2 className="text-[45px] sm:text-[70px] whitespace-nowrap md:text-[80px] lg:text-[70px] xl:text-[80px] xxl:text-[90px] text-white font-rajdhani font-bold keyFramAnimation">
										WEB DESIGNER
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
