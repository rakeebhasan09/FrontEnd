import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";

const AdminProfile = () => {
	const { user, token, setUser } = useAuth();
	const navigate = useNavigate();
	const editProfileHandler = async (event) => {
		event.preventDefault();
		const name = event.target.adminName.value;
		const mobile = event.target.mobile.value;
		const profilePicture = event.target.profilePicture.value;
		const address = event.target.address.value;

		if (
			name === "" ||
			mobile === "" ||
			profilePicture === "" ||
			address === ""
		) {
			toast.warn("All fields area required.");
			return;
		}

		const adminInfo = { name, mobile, profilePicture, address };
		const res = await fetch(
			`http://localhost:5000/api/admin-profile/${user.id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(adminInfo),
			}
		);
		const data = await res.json();
		if (!res.ok) {
			toast.error(data.error || "Update Failed!");
			return;
		}

		// ✅ Updated user data
		const updatedUser = data.user;

		// 🔹 Step 2: Update AuthProvider state
		setUser(updatedUser); // <-- Update the user state

		// 🔹 Step 3: Update localStorage too
		localStorage.setItem(
			"auth",
			JSON.stringify({ token, user: updatedUser })
		);

		Swal.fire({
			title: "Information Updated.",
			icon: "success",
		}).then(() => {
			event.target.reset(), navigate("/dashboard");
		});
	};
	return (
		<>
			<Helmet>
				<title>Admin Profile</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<h2 className="text-center text-[35px] md:text-[60px] text-slate-800 font-rubik font-semibold">
					My Profile
				</h2>
				<form
					onSubmit={editProfileHandler}
					className="max-w-[700px] shadow mx-auto p-5 md:p-10 rounded-lg mt-5 md:mt-10"
				>
					<div>
						<label className="block text-black font-medium font-rubik mb-1">
							Your Name
						</label>
						<input
							type="text"
							name="adminName"
							defaultValue={user.name}
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
						/>
					</div>
					<div className="mt-5">
						<label className="block text-black font-medium font-rubik mb-1">
							Your E-mail
						</label>
						<input
							type="email"
							defaultValue={user.email}
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
							disabled
						/>
					</div>
					<div className="mt-5">
						<label className="block text-black font-medium font-rubik mb-1">
							Your Mobile
						</label>
						<input
							type="text"
							name="mobile"
							defaultValue={user.mobile}
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
						/>
					</div>
					<div className="mt-5">
						<label className="block text-black font-medium font-rubik mb-1">
							Profile Picture
						</label>
						<input
							type="text"
							name="profilePicture"
							defaultValue={user.profile_picture}
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
						/>
					</div>
					<div className="mt-5">
						<label className="block text-black font-medium font-rubik mb-1">
							Your Address
						</label>
						<textarea
							name="address"
							rows={10}
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black resize-none"
							defaultValue={user.address}
						></textarea>
					</div>
					<div className="text-center mt-10">
						<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
							Edit Profile
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AdminProfile;
