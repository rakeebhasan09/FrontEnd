import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import EducationCard from "./EducationCard";

const Education = () => {
	const [educations, setEducations] = useState([]);
	useEffect(() => {
		fetch("educationData.json")
			.then((educationRes) => educationRes.json())
			.then((educationData) => setEducations(educationData));
	}, []);
	return (
		<section className="py-10 md:pt-20 md:pb-14 lg:pt-[120px] lg:pb-[75px]">
			<div className="container">
				<div className="mb-5 md:mb-9 lg:mb-[50px]">
					<SectionTitle
						areaTitle="Education & Experience"
						title="Empowering Creativity through"
						subTitle="Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational"
					></SectionTitle>
				</div>
				<div>
					<div className="flex items-center gap-3 md:gap-x-5 lg:gap-x-[30px] mb-4 md:mb-5 lg:mb-[32px]">
						<h2 className="text-white text-[28px] md:text-[32px] font-rajdhani font-bold">
							Education
						</h2>
						<img
							src="https://i.ibb.co.com/1GzsVfYh/custom-line.png"
							alt=""
						/>
					</div>
				</div>
				<div className="grid lg:grid-cols-2 gap-4 md:gap-5 lg:gap-[30px]">
					{educations.map((education) => (
						<EducationCard
							key={education.id}
							education={education}
						></EducationCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Education;
