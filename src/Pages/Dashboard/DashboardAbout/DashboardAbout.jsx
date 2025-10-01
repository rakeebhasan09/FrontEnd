import { Helmet } from "react-helmet-async";

const DashboardAbout = () => {
	return (
		<>
			<Helmet>
				<title>Admin Dashboard About</title>
			</Helmet>
			<div className="p-5 lg:p-10">Hello From Dashboard About</div>
		</>
	);
};

export default DashboardAbout;
