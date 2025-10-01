import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MyPortfolioTable from "./MyPortfolioTable";

const MyPortfolio = () => {
	return (
		<>
			<Helmet>
				<title>Admin Dashboard My Portfolio</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<Link to={"/dashboard/add-new-portfolio"}>
					<button className="py-3 px-8 bg-blue-400 rounded text-white font-rubik font-medium">
						Add New Portfolio
					</button>
				</Link>
				<MyPortfolioTable />
			</div>
			;
		</>
	);
};

export default MyPortfolio;
