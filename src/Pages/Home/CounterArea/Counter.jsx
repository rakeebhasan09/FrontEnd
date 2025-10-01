import CounterCard from "./CounterCard";

const Counter = () => {
	return (
		<div>
			<div className="container">
				<div className="flex flex-col gap-y-[30px] lg:flex-row gap-x-[30px]">
					<div className="w-full lg:w-1/2 pt-7 pr-7 pb-7 pl-7 md:pt-9 md:pr-[52px] md:pb-[51px] md:pl-[52px] bg-gradient-to-br from-[#060606] via-[#2F121B] to-[#760D2D] rounded-[20px]">
						<div className="flex items-center gap-x-3 md:gap-x-5 lg:justify-between lg:gap-x-5 xl:gap-x-[30px] xxl:gap-x-[70px]">
							<div className="text-brand text-[75px] md:text-[90px] lg:text-[80px] xl:text-[120px] xxl:text-[167px] leading-[100%] font-rubik font-medium">
								25
							</div>
							<div className="text-white text-[35px] md:text-[50px] lg:text-[35px] xl:text-[48px] font-bold leading-[100%]">
								Years Of experience
							</div>
						</div>
						<p className="text-white text-[16px] font-rubik pt-7">
							Business consulting consultants provide expert
							advice and guida the a businesses to help theme
							their performance efficiency
						</p>
					</div>
					<div className="w-full lg:w-1/2 flex flex-wrap gap-5 md:gap-[30px]">
						<CounterCard
							ammount={"20k+"}
							subTitle={"Our Project Complete"}
						></CounterCard>
						<CounterCard
							ammount={"10k+"}
							subTitle={"Our Natural Products"}
						></CounterCard>
						<CounterCard
							ammount={"200+"}
							subTitle={"Clients Reviews"}
						></CounterCard>
						<CounterCard
							ammount={"1,000+"}
							subTitle={"our Satisfied Clients"}
						></CounterCard>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
