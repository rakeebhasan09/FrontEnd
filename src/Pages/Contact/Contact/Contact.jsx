import { Helmet } from "react-helmet-async";
import ContactBanner from "../ContactBanner/ContactBanner";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
	return (
		<main>
			<Helmet>
				<title>Rakeeb Hasan || Contact</title>
			</Helmet>
			<section>
				<ContactBanner></ContactBanner>
			</section>
			<section className="py-10 md:py-20 lg:py-[100px]">
				<ContactInfo></ContactInfo>
			</section>
			<section className="pb-10 md:pb-20 lg:pb-[100px]">
				<ContactForm></ContactForm>
			</section>
		</main>
	);
};

export default Contact;
