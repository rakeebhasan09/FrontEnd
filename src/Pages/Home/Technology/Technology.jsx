import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Technology = () => {
	const [slides, setSlides] = useState([]);
	useEffect(() => {
		fetch("technologies.json")
			.then((technologiesRes) => technologiesRes.json())
			.then((technologiesData) => setSlides(technologiesData));
	}, []);
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 50,
		speed: 4000,
		cssEase: "linear",
		arrows: false,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		variableWidth: true,
		swipeToSlide: false,
		draggable: false,
		touchMove: false,
	};
	return (
		<section className="pb-10 md:pb-16 lg:pb-[100px]">
			<div>
				<h2 className="text-white text-center text-[28px] md:text-[32px] font-rajdhani font-bold">
					My Development Toolkit
				</h2>
				<div className="relative w-[200px] h-[5px] bg-[#2b2a2a] mx-auto mt-2">
					<div className="absolute top-0 w-[15px] h-[5px] bg-brand animate-mymove"></div>
				</div>
				<div>
					<div className="w-full mx-auto mt-6 overflow-hidden">
						<Slider {...settings}>
							{slides.map((item) => (
								<div key={item.id} className="inline-block">
									<div className="flex items-center  px-3 lg:px-4 py-2 whitespace-nowrap select-none font-semibold text-gray-800">
										<div className="w-40 h-32 p-5 bg-[#141414] flex items-center justify-center rounded-lg">
											<img
												className="w-20 object-contain"
												src={item.logo}
												alt=""
											/>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technology;
