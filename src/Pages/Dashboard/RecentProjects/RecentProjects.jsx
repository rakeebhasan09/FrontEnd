import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import RecentProjectTable from "./RecentProjectTable";

const RecentProjects = () => {
	return (
		<>
			<Helmet>
				<title>Admin Dashboard Recent Projects</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<Link to={"/dashboard/add-recent-project"}>
					<button className="py-3 px-8 bg-blue-400 rounded text-white font-rubik font-medium">
						Add Recent Project
					</button>
				</Link>
				<RecentProjectTable />
			</div>
		</>
	);
};

export default RecentProjects;
