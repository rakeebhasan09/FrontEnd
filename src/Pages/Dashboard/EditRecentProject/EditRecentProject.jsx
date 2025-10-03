import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const EditRecentProject = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { recentProject } = location.state || {};
	const editRecentProjectHandler = async (event) => {
		event.preventDefault();
		const id = recentProject.id;
		const name = event.target.projectName.value;
		const liveUrl = event.target.liveUrl.value;
		const thumbnailUrl = event.target.thumbnailUrl.value;
		const fullPageUrl = event.target.fullPageUrl.value;

		if (
			name === "" ||
			liveUrl === "" ||
			thumbnailUrl === "" ||
			fullPageUrl === ""
		) {
			toast.warn("All Fields Are Required!");
			return;
		}

		const updateInfo = { id, name, liveUrl, thumbnailUrl, fullPageUrl };

		try {
			const res = await fetch(
				`http://localhost:5000/api/update-recent-project`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updateInfo),
				}
			);
			if (res.ok) {
				Swal.fire({
					title: "Recent Project Edited.",
					icon: "success",
				}).then(() => {
					event.target.reset();
					navigate("/dashboard/recent-projects");
				});
			} else {
				Swal.fire({
					title: "Something Went Wrong.",
					icon: "failed",
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<Helmet>
				<title>Admin Dashboard Edit Recent Project</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<div>
					<h2 className="text-[40px] md:text-[60px] text-center font-rubik text-black">
						Edit Recent Project
					</h2>
					<form
						onSubmit={editRecentProjectHandler}
						className="max-w-[700px] shadow mx-auto p-5 md:p-10 rounded-lg mt-5 md:mt-8"
					>
						<div>
							<label className="block text-black font-medium font-rubik mb-1">
								Project Name
							</label>
							<input
								type="text"
								defaultValue={recentProject.name}
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
								defaultValue={recentProject.url}
								name="liveUrl"
								placeholder="Paste Live URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Thumbnail URL
							</label>
							<input
								type="text"
								defaultValue={recentProject.thumbnail}
								name="thumbnailUrl"
								placeholder="Paste Full Page URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="mt-5">
							<label className="block text-black font-medium font-rubik mb-1">
								Full Page URL
							</label>
							<input
								type="text"
								defaultValue={recentProject.full_image}
								name="fullPageUrl"
								placeholder="Paste Full Page URL"
								className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							/>
						</div>
						<div className="text-center mt-10">
							<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
								Edit Recent Project
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditRecentProject;
