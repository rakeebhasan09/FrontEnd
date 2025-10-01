import { HiOutlineXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const AsideBar = ({ mobileSideBar, openSideBar }) => {
	const { logout } = useAuth();
	return (
		<div
			className={`w-[300px] shadow-md z-20 min-h-screen fixed top-0 ${
				mobileSideBar ? "left-0" : "-left-[300px]"
			}  lg:left-0 z-30 bg-white transition-all duration-300 flex flex-col`}
		>
			<div className="navbar justify-between bg-base-100 min-h-0 py-2 px-4 shadow-sm">
				<div className="logo">
					<Link
						to={"/dashboard"}
						className="flex items-center gap-1"
						data-discover="true"
					>
						<img
							className="w-[35px] xl:w-[30px] block"
							alt=""
							src="https://i.ibb.co.com/gZDM6BLc/logocopy.png"
						/>
						<span className="text-[25px] xl:text-[30px] text-brand font-rubik">
							Rakeeb
						</span>
					</Link>
				</div>
				<div className="lg:hidden">
					<HiOutlineXMark
						onClick={openSideBar}
						className="text-[30px] cursor-pointer text-brand"
					/>
				</div>
			</div>
			{/* Aside Menu Iems */}
			<div className="aside-menu-items flex flex-col justify-between flex-grow pb-14">
				<ul className="flex flex-col gap-3 pt-5">
					<li>
						<NavLink
							to={"/dashboard"}
							end
							className="px-5 py-3 block text-black text-[18px] font-rubik font-medium transition-all duration-200 hover:bg-brand hover:text-white"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/dashboard/about"}
							end
							className="px-5 py-3 block text-black text-[18px] font-rubik font-medium transition-all duration-200 hover:bg-brand hover:text-white"
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/dashboard/toolkit"}
							end
							className="px-5 py-3 block text-black text-[18px] font-rubik font-medium transition-all duration-200 hover:bg-brand hover:text-white"
						>
							My Toolkit
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/dashboard/portfolio"}
							end
							className="px-5 py-3 block text-black text-[18px] font-rubik font-medium transition-all duration-200 hover:bg-brand hover:text-white"
						>
							Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/dashboard/recent-projects"}
							end
							className="px-5 py-3 block text-black text-[18px] font-rubik font-medium transition-all duration-200 hover:bg-brand hover:text-white"
						>
							Recent Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/dashboard/contact"}
							end
							className="px-5 py-3 block text-black text-[18px] font-rubik font-medium transition-all duration-200 hover:bg-brand hover:text-white"
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/dashboard/admin-list"}
							end
							className="px-5 py-3 block text-black text-[18px] font-rubik font-medium transition-all duration-200 hover:bg-brand hover:text-white"
						>
							Admin List
						</NavLink>
					</li>
				</ul>
				<div>
					<button
						onClick={logout}
						className="ml-4 mt-auto block py-4 px-20 border-[1px] border-brand rounded text-[18px] text-black font-rubik font-medium"
					>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
};

export default AsideBar;
