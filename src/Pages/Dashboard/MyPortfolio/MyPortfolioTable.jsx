import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPortfolioTable = () => {
	// Toolkit Delete Handling
	const handleDeletePortfolio = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				});
			}
		});
	};
	return (
		<div className="mt-10 overflow-x-auto">
			<table className="w-full border border-collapse">
				<tr>
					<th className="w-3 border px-1 py-2 text-black font-rubik whitespace-nowrap">
						# No
					</th>
					<th className="w-[40%] border px-1 py-2 text-black font-rubik whitespace-nowrap">
						Portfolio Name
					</th>
					<th className="w-[10%] border px-1 py-2 text-black font-rubik whitespace-nowrap">
						Live Link
					</th>
					<th className="w-[20%] border px-1 py-2 text-black font-rubik whitespace-nowrap">
						Technologies
					</th>
					<th className="w-[10%] border px-1 py-2 text-black font-rubik whitespace-nowrap">
						Catagoryes
					</th>
					<th className="w-[20%] border px-1 py-2 text-black font-rubik whitespace-nowrap">
						Thumbnail
					</th>
					<th className="w-4 border px-1 py-2 text-black font-rubik whitespace-nowrap">
						Added On
					</th>
					<th className="w-2 border px-1 py-2 text-black font-rubik whitespace-nowrap">
						Action
					</th>
				</tr>
				{/* Content Row */}
				<tr>
					<td className="w-3 border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
						01
					</td>
					<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
						Photoshop
					</td>
					<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
						<a href="#">Live Link</a>
					</td>
					<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
						React.js TailwindCSS
					</td>
					<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
						landingPage corporate
					</td>
					<td className="border px-5 py-2 text-center whitespace-nowrap">
						<img
							className="w-20 block mx-auto"
							src="https://programmingdome.com/admin/images/thumbnail/akbankblogpageredesing.png"
							alt=""
						/>
					</td>
					<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
						09-Sep-2025
					</td>
					<td className="border text-center px-5 align-middle whitespace-nowrap">
						<span className="flex justify-center gap-3">
							<Link to={"/dashboard/edit-portfolio"}>
								<button className="w-10 h-10 rounded bg-yellow-400 flex items-center justify-center">
									<FaPen className="text-black" />
								</button>
							</Link>
							<button
								onClick={handleDeletePortfolio}
								className="w-10 h-10 rounded bg-red-400 flex items-center justify-center"
							>
								<FaTrash className="text-white" />
							</button>
						</span>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default MyPortfolioTable;
