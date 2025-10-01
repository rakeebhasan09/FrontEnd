import { Helmet } from "react-helmet-async";

const DashboardHome = () => {
	return (
		<>
			<Helmet>
				<title>Admin Dashboard Home</title>
			</Helmet>
			<div className="p-5 lg:p-10">welcome to dashboard home</div>
		</>
	);
};

export default DashboardHome;
