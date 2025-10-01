import ContactInfoCard from "./ContactInfoCard";
import { MdLocationOn } from "react-icons/md";
import { FaMobile, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
	return (
		<div className="container">
			<div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
				<ContactInfoCard
					title={"Sherpur, Mymensingh, Bangladesh"}
					icon={MdLocationOn}
				></ContactInfoCard>
				<ContactInfoCard
					title={
						<>
							+8801701028688 <br />
							+8801601028688
						</>
					}
					icon={FaMobile}
				></ContactInfoCard>
				<ContactInfoCard
					title={"mdrakeebhasan1@gmail.com"}
					icon={FaEnvelope}
				></ContactInfoCard>
			</div>
		</div>
	);
};

export default ContactInfo;
