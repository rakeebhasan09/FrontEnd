import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("servicesData.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div className="py-12 md:py-[70px] lg:py-[100px] xxl:py-[120px]">
			<div className="container">
				<div className="grid gap-y-4 sm:grid-cols-2 md:grid-cols-2 md:gap-y-5 lg:grid-cols-4 gap-x-[30px]">
					{services.map((service) => (
						<ServiceCard
							key={service._id}
							service={service}
						></ServiceCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
