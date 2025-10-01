import CardTitle from "./CardTitle";
import SkillBar from "./SkillBar";

const SkillsArea = () => {
	return (
		<div className="skills-area py-12 md:py-20 lg:py-[120px]">
			<div className="container">
				<div className="flex flex-col lg:flex-row gap-[30px]">
					<div className="w-full lg:w-1/2">
						<CardTitle title={"Design Skill"}></CardTitle>
						<div className="flex flex-col gap-5 md:gap-[30px]">
							<SkillBar
								skillName={"PHOTOSHOp"}
								skillPercentage={"100%"}
							></SkillBar>
							<SkillBar
								skillName={"FIGMA"}
								skillPercentage={"95%"}
							></SkillBar>
							<SkillBar
								skillName={"ADOBE XD"}
								skillPercentage={"60%"}
							></SkillBar>
							<SkillBar
								skillName={"ADOBE ILLUSTRATOR"}
								skillPercentage={"70%"}
							></SkillBar>
						</div>
					</div>
					<div className="w-full lg:w-1/2">
						<CardTitle title={"Development Skill "}></CardTitle>
						<div className="flex flex-col gap-5 md:gap-[30px]">
							<SkillBar
								skillName={"HTML & CSS"}
								skillPercentage={"100%"}
							></SkillBar>
							<SkillBar
								skillName={"Bootstrap & TailwindCSS"}
								skillPercentage={"95%"}
							></SkillBar>
							<SkillBar
								skillName={"JavaScript & React"}
								skillPercentage={"60%"}
							></SkillBar>
							<SkillBar
								skillName={"PHP"}
								skillPercentage={"70%"}
							></SkillBar>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsArea;
