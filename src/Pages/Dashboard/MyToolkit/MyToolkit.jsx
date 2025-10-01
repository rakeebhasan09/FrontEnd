import { Link } from "react-router-dom";
import ToolkitTable from "./ToolkitTable";
import { Helmet } from "react-helmet-async";

const MyToolkit = () => {
	return (
		<>
			<Helmet>
				<title>Admin Dashboard My Toolkit</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<Link to={"/dashboard/add-new-toolkit"}>
					<button className="py-3 px-8 bg-blue-400 rounded text-white font-rubik font-medium">
						Add New Toolkit
					</button>
				</Link>
				<ToolkitTable />
			</div>
		</>
	);
};

export default MyToolkit;
