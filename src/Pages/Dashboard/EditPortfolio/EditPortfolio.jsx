import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const EditPortfolio = () => {
	const navigate = useNavigate();
	// Add Portfolio Handler
	const editProtfolioHandler = (event) => {
		event.preventDefault();
		const name = event.target.projectName.value;
		const liveUrl = event.target.liveUrl.value;
		const technologies = event.target.technologies.value;
		const catagories = event.target.catagories.value;
		const thumbnailUrl = event.target.thumbnailUrl.value;
		const fullPageUrl = event.target.fullPageUrl.value;

		if (
			name === "" ||
			liveUrl === "" ||
			technologies === "" ||
			catagories === "" ||
			thumbnailUrl === "" ||
			fullPageUrl === ""
		) {
			toast.warn("All Fields Are Required!");
			return;
		}

		Swal.fire({
			title: "Portfolio Edited.",
			icon: "success",
		}).then(() => {
			event.target.reset(), navigate("/dashboard/portfolio");
		});
	};
	return (
		<>
			<Helmet>
				<title>Admin Dashboard Edit Protfolio</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<div>
					<h2 className="text-[40px] md:text-[60px] text-center font-rubik text-black">
						Edit Portfolio
					</h2>
					<form
						onSubmit={editProtfolioHandler}
						className="max-w-[700px] shadow mx-auto p-5 md:p-10 rounded-lg mt-5 md:mt-8"
					>
						<div>
							<label className="block text-black font-medium font-rubik mb-1">
								Project Name
							</label>
							<input
								type="text"
								defaultValue={"Project Name"}
								name="projectName"
								placeholder="Write Project Name"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Live URL
							</label>
							<input
								type="text"
								defaultValue={"Live URL"}
								name="liveUrl"
								placeholder="Paste Live URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Technologies
							</label>
							<input
								type="text"
								defaultValue={"React.js TailwindCSS"}
								name="technologies"
								placeholder="Write Uses Technologies"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Catagories (Please select Catagoryes - Landing
								Page, corporate, <br /> e-commerce, Dashboard)
							</label>
							<input
								type="text"
								defaultValue={"landing page"}
								name="catagories"
								placeholder="Write Project Catagories"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Thumbnail URL
							</label>
							<input
								type="text"
								defaultValue={"thumbnailUrl"}
								name="thumbnailUrl"
								placeholder="Paste Thumbnail URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Full Page URL
							</label>
							<input
								type="text"
								defaultValue={"fullPageUrl"}
								name="fullPageUrl"
								placeholder="Paste Full Page URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="text-center mt-10">
							<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
								Edit Portfolio
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditPortfolio;
