import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
	const [experiences, setExperiences] = useState([]);
	useEffect(() => {
		fetch("experiencesData.json")
			.then((experiencesRes) => experiencesRes.json())
			.then((experiencesData) => setExperiences(experiencesData));
	}, []);
	return (
		<section className="pb-10 md:pb-16 lg:pb-[100px] xl:pb-[120px]">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-y-7 md:gap-y-10 items-start">
					<div className="lg:pr-7 xl:pr-[80px] 2xl:pr-[138px] h-full">
						<div className="flex items-center gap-3 md:gap-x-5 lg:gap-x-[30px] mb-4 md:mb-5 lg:mb-4 xl:mb-[32px]">
							<h2 className="text-white text-[28px] md:text-[32px] font-rajdhani font-bold">
								Experiences
							</h2>
							<img
								src="https://i.ibb.co.com/1GzsVfYh/custom-line.png"
								alt=""
							/>
						</div>
						<div className="grid gap-y-5 xl:gap-y-8 2xl:gap-y-[50px]">
							{experiences.map((experience) => (
								<ExperienceCard
									key={experience.id}
									experience={experience}
								></ExperienceCard>
							))}
						</div>
					</div>

					<div>
						<img
							className="max-w-full rounded-xl lg:rounded-[20px]"
							src="https://i.ibb.co.com/WhLY7JH/expert-img.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
//

export default Experiences;
