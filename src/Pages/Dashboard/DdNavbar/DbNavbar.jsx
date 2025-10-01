import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const DbNavbar = ({ openSideBar }) => {
	const { user, logout } = useAuth();
	return (
		<div className="sticky top-0 z-10 bg-white">
			<div className="navbar justify-between bg-base-100 min-h-0 py-2 px-4 shadow-sm">
				<div onClick={openSideBar} className="">
					<div className="hamburger-icon flex flex-col gap-2 cursor-pointer mr-2 lg:hidden">
						<span className="w-10 h-1 block bg-brand"></span>
						<span className="w-10 h-1 block bg-brand"></span>
						<span className="w-10 h-1 block bg-brand"></span>
					</div>
					<div className="logo">
						<Link
							to={"/dashboard"}
							className="flex items-center gap-1"
							data-discover="true"
						>
							<img
								className="w-[35px] xl:w-[30px] block lg:hidden"
								alt=""
								src="https://i.ibb.co.com/gZDM6BLc/logocopy.png"
							/>
							<span className="text-[25px] xl:text-[30px] text-brand font-rubik">
								Dashboard
							</span>
						</Link>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="cursor-pointer">
						<div className="flex items-center gap-2">
							<img
								className="w-10 rounded-full"
								alt={user && user.name}
								src={user && user.profile_picture}
							/>
							<div className="text-left hidden sm:block">
								<h4 className="text-black font-medium">
									{user && user.name}
								</h4>
								<p className="text-brand text-sm">Admin</p>
							</div>
						</div>
					</div>

					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-white z-40 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link to="/dashboard/profile">Profile</Link>
						</li>
						<li>
							<Link to={"/dashboard/change-password"}>
								Change Password
							</Link>
						</li>
						<li>
							<button onClick={logout}>Logout</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DbNavbar;
