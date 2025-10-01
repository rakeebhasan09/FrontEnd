import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const RegisterAdmin = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const navigate = useNavigate();
	const addAdminHandler = async (event) => {
		event.preventDefault();
		const name = event.target.adminName.value;
		const adminEmail = event.target.adminEmail.value;
		const mobile = event.target.mobile.value;
		const profilePicture = event.target.profilePicture.value;
		const address = event.target.address.value;
		const adminPassword = event.target.adminPassword.value;

		if (
			name === "" ||
			adminEmail === "" ||
			mobile === "" ||
			profilePicture === "" ||
			address === "" ||
			adminPassword === ""
		) {
			toast.warn("All fields area required.");
			return;
		}

		const newAdmin = {
			name,
			adminEmail,
			mobile,
			profilePicture,
			address,
			adminPassword,
		};

		try {
			const res = await fetch(
				"http://localhost:5000/api/admin-register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newAdmin),
				}
			);
			const data = await res.json();
			if (res.ok) {
				Swal.fire({
					title: "New Admin Added.",
					icon: "success",
				}).then(() => {
					event.target.reset(), navigate("/dashboard/admin-list");
				});
			} else {
				Swal.fire({
					title: "Something Went Wrong.",
					icon: "warning",
				});
			}
		} catch (error) {
			console.error(err);
		}
	};
	return (
		<>
			<Helmet>
				<title>New Admin Registration Form</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<h2 className="text-center text-[35px] md:text-[60px] text-slate-800 font-rubik font-semibold">
					Add New Admin
				</h2>
				<form
					onSubmit={addAdminHandler}
					className="max-w-[700px] shadow mx-auto p-5 md:p-10 rounded-lg mt-5 md:mt-10"
				>
					<div>
						<label className="block text-black font-medium font-rubik mb-1">
							Admin Name
						</label>
						<input
							type="text"
							name="adminName"
							placeholder="Admin Name"
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
						/>
					</div>
					<div className="mt-5">
						<label className="block text-black font-medium font-rubik mb-1">
							Admin E-mail
						</label>
						<input
							type="email"
							name="adminEmail"
							placeholder="Admin E-mail"
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
						/>
					</div>
					<div className="mt-5">
						<label className="block text-black font-medium font-rubik mb-1">
							Admin Mobile
						</label>
						<input
							type="text"
							name="mobile"
							placeholder="Admin Mobile"
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
							placeholder="Profile Picture URL (Must be hosted on public moad.)"
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black"
						/>
					</div>
					<div className="mt-5">
						<label className="block text-black font-medium font-rubik mb-1">
							Admin Address
						</label>
						<textarea
							name="address"
							rows={10}
							className="outline-none rounded-md w-full bg-[#F8F9FA] py-3 px-5 text-black resize-none"
							placeholder="Admin Address"
						></textarea>
					</div>
					<div className="relative mt-5 admin-input-row flex items-center py-[15px] px-[15px] md:px-[30px] bg-[#f8f9fa]">
						<div className="absolute right-5">
							{showPassword ? (
								<BsFillEyeSlashFill
									onClick={handleShowPassword}
									className="text-[#000000] text-[22px] cursor-pointer"
								/>
							) : (
								<BsFillEyeFill
									onClick={handleShowPassword}
									className="text-[#000000] text-[22px] cursor-pointer"
								/>
							)}
						</div>
						<div className="w-10  h-9 flex items-center justify-center pr-[10px] border-r-[1px] border-r-brand">
							<FaLock className="text-[#000000] text-[22px]" />
						</div>
						<input
							type={showPassword ? "text" : "password"}
							name="adminPassword"
							className="w-[calc(100%-40px)] px-3 outline-none bg-transparent text-[#141414] text-[18px]"
							placeholder="Enter Your Password"
						/>
					</div>
					<div className="text-center mt-10">
						<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
							Add Admin
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default RegisterAdmin;
