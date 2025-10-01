import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import ScrollTop from "../Shared/ScrollTop/ScrollTop";

const MainLayout = () => {
	return (
		<div className="font-rajdhani">
			<ScrollTop />
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
