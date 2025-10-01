import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import FeatureCard from "./FeatureCard";

const ServicePricing = () => {
	const [features, setFeatures] = useState([]);
	useEffect(() => {
		fetch("pricing.json")
			.then((pricingRes) => pricingRes.json())
			.then((pricingData) => setFeatures(pricingData));
	}, []);
	return (
		<div className="container">
			<SectionTitle
				areaTitle={"My Price plan"}
				title={"Enhancing Collaboration between Remote"}
			></SectionTitle>
			<div className="mt-10 grid items-center lg:grid-cols-3 gap-5 lg:gap-7">
				{features.map((feature) => (
					<FeatureCard
						key={feature.id}
						feature={feature}
					></FeatureCard>
				))}
			</div>
		</div>
	);
};

export default ServicePricing;
