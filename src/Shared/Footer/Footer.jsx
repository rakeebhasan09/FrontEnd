import { Link } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";
import { toast } from "react-toastify";
import moment from "moment";

const Footer = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success("Thanks for reching out.", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		e.target.reset();
	};
	return (
		<footer className="pt-16 pb-5 bg-[#141414]">
			<div className="footer-top pb-10">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[30px] lg:gap-[60px]">
						<div className="flex flex-col">
							<div className="flex-grow">
								<div>
									<Link
										to="/"
										className="flex items-center gap-1"
									>
										<img
											className="w-[35px] xl:w-[40px] block"
											src="https://i.ibb.co.com/gZDM6BLc/logocopy.png"
											alt=""
										/>
										<span className="text-[25px] xl:text-[35px] text-white font-rubik">
											Rakeeb
										</span>
									</Link>
								</div>
								<p className="mt-2 text-justify text-[16px] text-white">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Sed vel error itaque
									provident amet temporibus, sapiente illo ad
									impedit illum consequatur debitis eius sit
									ducimus quo repudiandae architecto aperiam
									culpa omnis aspernatur, hic numquam. Quidem
									possimus eaque soluta blanditiis hic
									cupiditate, corrupti perspiciatis
									dignissimos veritatis, et autem animi saepe
									fugit quibusdam libero molestias beatae
									quasi sapiente voluptatibus suscipit!
								</p>
							</div>
							<div className="hidden md:block">
								<h2 className="text-white mt-5 md:mt-0 text-[23px] lg:text-[33px] xl:text-[40px] font-rubik font-semibold mb-2 lg:mb-3 xl:mb-5">
									Get Ready To Create Great
								</h2>
								<form
									onSubmit={handleSubmit}
									className="relative"
								>
									<input
										className="w-full py-3 px-5 border-none outline-none rounded text-[#141414] font-rubik"
										type="email"
										placeholder="Enter Your E-mail"
										required
									/>
									<button className="group absolute w-20 h-full bg-brand top-0 right-0 flex items-center justify-center cursor-pointer">
										<BsFillSendFill className="text-[22px] text-white transition-transform duration-300 group-hover:rotate-[45deg]" />
									</button>
								</form>
							</div>
						</div>
						<div className="google-map">
							<div>
								<h2 className="text-white text-[28px] md:text-[32px] md:mb-5 font-rajdhani font-bold">
									Contact Info
								</h2>
								<ul className="flex flex-col gap-y-3">
									<li className="text-[#9F9F9F] text-[16px] font-medium font-rubik">
										Address : Sherpur, Mymensingh,
										Bangladesh
									</li>
									<li className="text-[#9F9F9F] text-[16px] font-medium font-rubik">
										Mobile : +8801701028688
									</li>
									<li className="text-[#9F9F9F] text-[16px] font-medium font-rubik">
										E-mail : mdrakeebhasan1@gmail.com
									</li>
								</ul>
							</div>
							<iframe
								className="block mt-4 w-full h-[200px] rounded"
								src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d903.8722553487434!2d90.01089726961162!3d25.017473213895205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAxJzAyLjkiTiA5MMKwMDAnNDEuNiJF!5e0!3m2!1sen!2sbd!4v1758185610396!5m2!1sen!2sbd"
							></iframe>
							<div className="md:hidden">
								<h2 className="text-white mt-5 md:mt-0 text-[23px] lg:text-[33px] xl:text-[40px] font-rubik font-semibold mb-2 lg:mb-3 xl:mb-5">
									Get Ready To Create Great
								</h2>
								<form
									onSubmit={handleSubmit}
									className="relative"
								>
									<input
										className="w-full py-3 px-5 border-none outline-none rounded text-[#141414] font-rubik"
										type="email"
										placeholder="Enter Your E-mail"
										required
									/>
									<button className="group absolute w-20 h-full bg-brand top-0 right-0 flex items-center justify-center cursor-pointer">
										<BsFillSendFill className="text-[22px] text-white transition-transform duration-300 group-hover:rotate-[45deg]" />
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom container border-t-[1px] border-t-[#262626] pt-5">
				<p className="text-center text-[16px] md:text-[18px] font-rubik">
					@{moment().format("Y")} | All Rights Reserved By Rakeeb
					Hasan
				</p>
			</div>
		</footer>
	);
};

export default Footer;
