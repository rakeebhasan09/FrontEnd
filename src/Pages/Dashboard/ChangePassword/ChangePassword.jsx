import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ChangePassword = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleChangePassword = (event) => {
		event.preventDefault();
		const oldPassword = event.target.oldPassword.value;
		const newPassword = event.target.newPassword.value;
		const reTypePassword = event.target.reTypePassword.value;

		if (oldPassword === "" || newPassword === "" || reTypePassword === "") {
			toast.warn("Something went wrong!");
			return;
		}

		if (oldPassword !== "Rakeeb@#6880?") {
			toast.warn("Incorrect Old Password!");
			return;
		}

		if (newPassword !== reTypePassword) {
			toast.warn("New password and Re-typed password should be same!");
			return;
		}

		Swal.fire({
			title: "Password Updated.",
			icon: "success",
		}).then(() => {
			event.target.reset(), navigate("/dashboard");
		});
	};
	return (
		<>
			<Helmet>
				<title>Change Password</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<h2 className="text-[30px] lg:text-[55px] text-center font-rubik font-semibold text-slate-700 lg:mb-10 mb-5">
					Change Your Password
				</h2>
				<form
					className="max-w-[600px] mx-auto"
					onSubmit={handleChangePassword}
				>
					<div className="flex flex-col gap-y-5">
						<div className="relative admin-input-row flex items-center py-[15px] px-[15px] md:px-[30px] bg-[#f8f9fa]">
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
								name="oldPassword"
								className="w-[calc(100%-40px)] px-3 outline-none bg-transparent text-[#141414] text-[18px]"
								placeholder="Enter Your Old Password"
							/>
						</div>
						<div className="relative admin-input-row flex items-center py-[15px] px-[15px] md:px-[30px] bg-[#f8f9fa]">
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
								name="newPassword"
								className="w-[calc(100%-40px)] px-3 outline-none bg-transparent text-[#141414] text-[18px]"
								placeholder="Enter New Password"
							/>
						</div>
						<div className="relative admin-input-row flex items-center py-[15px] px-[15px] md:px-[30px] bg-[#f8f9fa]">
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
								name="reTypePassword"
								className="w-[calc(100%-40px)] px-3 outline-none bg-transparent text-[#141414] text-[18px]"
								placeholder="Re-type New Password"
							/>
						</div>
						<div className="text-center mt-4">
							<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
								Update Password
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default ChangePassword;
