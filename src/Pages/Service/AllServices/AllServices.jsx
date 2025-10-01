import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const AllServices = () => {
	const [allServices, setAllServices] = useState([]);
	useEffect(() => {
		fetch("provideServices.json")
			.then((res) => res.json())
			.then((data) => setAllServices(data));
	}, []);
	return (
		<div className="container">
			<h2 className="text-white text-center text-[28px] md:text-[32px] font-rajdhani font-bold">
				My Service's
			</h2>
			<div className="relative w-[120px] h-[5px] bg-[#2b2a2a] mx-auto mt-2">
				<div className="absolute top-0 w-[15px] h-[5px] bg-brand animate-mymove"></div>
			</div>
			<div className="grid lg:grid-cols-2 gap-5 lg:gap-8 mt-10">
				{allServices.map((sservice) => (
					<SingleService
						key={sservice.id}
						sservice={sservice}
					></SingleService>
				))}
			</div>
		</div>
	);
};

export default AllServices;
