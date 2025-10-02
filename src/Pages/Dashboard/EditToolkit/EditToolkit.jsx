import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const EditToolkit = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { toolkit } = location.state || {};
	// Submit Handler
	const editToolkit = async (e) => {
		e.preventDefault();
		const id = toolkit.id;
		const name = e.target.toolkitname.value;
		const toolkiturl = e.target.toolkiturl.value;
		if (name === "" || toolkiturl === "") {
			toast.warn("All fields area required.");
			return;
		}

		const editedInfo = { id, name, toolkiturl };
		try {
			const res = await fetch("http://localhost:5000/api/edit-toolkit", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(editedInfo),
			});
			if (res.ok) {
				Swal.fire({
					title: "Toolkit Edited.",
					icon: "success",
				}).then(() => {
					e.target.reset(), navigate("/dashboard/toolkit");
				});
			}
		} catch (error) {
			console.error(err);
		}
	};

	return (
		<>
			<Helmet>
				<title>Admin Dashboard Edit Toolkit</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<div>
					<h2 className="text-[40px] md:text-[60px] text-center font-rubik text-black">
						Edit Toolkit
					</h2>
					{toolkit && (
						<form
							onSubmit={editToolkit}
							className="max-w-[700px] shadow mx-auto p-5 md:p-10 rounded-lg mt-5 md:mt-10"
						>
							<div>
								<label className="block text-black font-medium font-rubik mb-1">
									Toolkit Name
								</label>
								<input
									type="text"
									defaultValue={toolkit.toolkit_name}
									name="toolkitname"
									placeholder="Write Toolkit Name"
									className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
								/>
							</div>
							<div className="mt-5">
								<label className="block text-black font-medium font-rubik mb-1">
									Toolkit Image URL
								</label>
								<input
									type="text"
									defaultValue={toolkit.toolkit_image}
									name="toolkiturl"
									placeholder="Paste Image URL"
									className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
								/>
							</div>
							<div className="text-center mt-10">
								<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
									Edit Toolkit
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</>
	);
};

export default EditToolkit;
