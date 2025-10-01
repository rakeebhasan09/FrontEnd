import { Helmet } from "react-helmet-async";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import Services from "../../Home/ServiceArea/Services";
import ServicePricing from "../ServicePricing/ServicePricing";
import AllServices from "../AllServices/AllServices";

const Service = () => {
	return (
		<main>
			<Helmet>
				<title>Rakeeb Hasan || Services</title>
			</Helmet>
			<section>
				<ServiceBanner></ServiceBanner>
			</section>
			<section className="py-10 md:py-20 lg:py-[100px]">
				<AllServices></AllServices>
			</section>
			<section className="pb-10 md:pb-20 lg:pb-[100px]">
				<ServicePricing></ServicePricing>
			</section>
		</main>
	);
};

export default Service;
