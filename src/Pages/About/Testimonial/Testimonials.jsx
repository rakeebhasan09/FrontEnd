import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("reviewsData.json")
			.then((reviewsRes) => reviewsRes.json())
			.then((allReviews) => setReviews(allReviews));
	}, []);
	return (
		<div className="container">
			<h5 className="text-brand text-[18px] text-center uppercase tracking-[1px] font-rubik font-medium">
				testimonials
			</h5>
			<h1 className="text-[30px] md:text-[45px] text-center font-semibold font-rubik">
				What My Clients Say
			</h1>
			<div className="relative w-[150px] h-[5px] bg-[#2b2a2a] mx-auto mt-2">
				<div className="absolute top-0 w-[15px] h-[5px] bg-brand animate-mymove"></div>
			</div>
			<div className="testimonila-slider">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					loop={true}
					speed={1000}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					breakpoints={{
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className="mySwiper"
				>
					{reviews.map((review) => (
						<SwiperSlide key={review.id}>
							<div className="p-6 lg:p-8 bg-[#141414] rounded-lg">
								<div className="flex items-center gap-3">
									<img
										className="!w-[60px] !h-[60px] rounded-full"
										src={review.image}
										alt=""
									/>
									<div className="flex-grow">
										<h3 className="text-white text-[22px] font-medium font-rubik">
											{review.username}
										</h3>
										<p className="text-[17px] font-rubik font-medium">
											{review.country}
										</p>
									</div>
								</div>
								<div className="mt-4">
									<p className="text-[18px] font-rubik font-medium">
										{review.feedback}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
