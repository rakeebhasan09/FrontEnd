import { useEffect, useState } from "react";
import RecentProject from "./RecentProject";

const RecentProjects = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch("recentProjects.json")
			.then((recentProjectsRes) => recentProjectsRes.json())
			.then((projectsData) => setProjects(projectsData));
	}, []);
	return (
		<section className="pb-0 md:pb-16 lg:pb-[100px]">
			<div className="container mx-auto">
				<h2 className="text-white text-center text-[28px] md:text-[32px] font-rajdhani font-bold">
					Recent Project's
				</h2>
				<div className="relative w-[150px] h-[5px] bg-[#2b2a2a] mx-auto mt-2">
					<div className="absolute top-0 w-[15px] h-[5px] bg-brand animate-mymove"></div>
				</div>
				<RecentProject projects={projects}></RecentProject>
			</div>
		</section>
	);
};

export default RecentProjects;
