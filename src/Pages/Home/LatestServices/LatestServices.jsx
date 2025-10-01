import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import LatestServiceCard from "./LatestServiceCard";

const LatestServices = () => {
	const [portfolioDatas, setPortfolioDara] = useState([]);
	useEffect(() => {
		fetch("portfolioData.json")
			.then((res) => res.json())
			.then((data) => {
				setPortfolioDara(data);
			});
	}, []);
	return (
		<div className="container">
			<SectionTitle
				areaTitle={"Latest Service"}
				title={"Inspiring The World One Project"}
				subTitle={`Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational`}
			></SectionTitle>
			<div className="flex flex-col gap-y-7 lg:flex-row lg:gap-x-5 pt-7 md:pt-[50px]">
				<div className="lg:w-1/2">
					<div className="portfolio-data flex flex-col gap-y-5">
						{portfolioDatas.map((portfolioData, idx) => (
							<LatestServiceCard
								key={portfolioData._id}
								idx={idx}
								portfolioData={portfolioData}
							></LatestServiceCard>
						))}
					</div>
				</div>
				<div className="lg:w-1/2">
					<div>
						<img
							className="lg:w-full xl:max-w-[90%] block ml-auto"
							src="https://i.ibb.co.com/Qv6gNJB7/latest-services-user-image.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestServices;
