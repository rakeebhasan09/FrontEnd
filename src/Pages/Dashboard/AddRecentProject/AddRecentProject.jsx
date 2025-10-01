import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddRecentProject = () => {
	const navigate = useNavigate();
	const addRecentProjectHandler = (event) => {
		event.preventDefault();
		const name = event.target.projectName.value;
		const liveUrl = event.target.liveUrl.value;
		const fullPageUrl = event.target.fullPageUrl.value;

		if (name === "" || liveUrl === "" || fullPageUrl === "") {
			toast.warn("All Fields Are Required!");
			return;
		}

		Swal.fire({
			title: "Recent Project Added.",
			icon: "success",
		}).then(() => {
			event.target.reset(), navigate("/dashboard/recent-projects");
		});
	};
	return (
		<>
			<Helmet>
				<title>Admin Dashboard Add Recent Project</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<div>
					<h2 className="text-[40px] md:text-[60px] text-center font-rubik text-black">
						Add Recent Project
					</h2>
					<form
						onSubmit={addRecentProjectHandler}
						className="max-w-[700px] shadow mx-auto p-5 md:p-10 rounded-lg mt-5 md:mt-8"
					>
						<div>
							<label className="block text-black font-medium font-rubik mb-1">
								Project Name
							</label>
							<input
								type="text"
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
								name="liveUrl"
								placeholder="Paste Live URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Full Page URL
							</label>
							<input
								type="text"
								name="fullPageUrl"
								placeholder="Paste Full Page URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="text-center mt-10">
							<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
								Add Recent Project
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddRecentProject;
