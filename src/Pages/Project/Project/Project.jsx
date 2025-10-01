import { Helmet } from "react-helmet-async";
import ProjectBanner from "../ProjectBanner/ProjectBanner";
import Gallery from "../Gallery/Gallery";

const Project = () => {
	return (
		<div>
			<Helmet>
				<title>Rakeeb Hasan || Projects</title>
			</Helmet>
			<section>
				<ProjectBanner></ProjectBanner>
			</section>
			<section className="py-10 md:py-16 lg:py-20 xl:py-[100px] ">
				<Gallery></Gallery>
			</section>
		</div>
	);
};

export default Project;
