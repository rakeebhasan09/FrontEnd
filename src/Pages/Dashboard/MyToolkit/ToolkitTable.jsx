import { FaPen, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ToolkitTable = () => {
	const navigate = useNavigate();
	// Toolkit Delete Handling
	const handleDeleteTollkit = () => {
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
				}).then(() => {
					navigate("/dashboard/toolkit");
				});
			}
		});
	};
	return (
		<div className="mt-10 overflow-x-auto">
			<table className="w-full border border-collapse">
				<tr>
					<th className="border px-5 py-2 text-black font-rubik whitespace-nowrap">
						# No
					</th>
					<th className="border px-5 py-2 text-black font-rubik whitespace-nowrap">
						Toolkit Name
					</th>
					<th className="border px-5 py-2 text-black font-rubik whitespace-nowrap">
						Toolkit Image
					</th>
					<th className="border px-5 py-2 text-black font-rubik whitespace-nowrap">
						Added On
					</th>
					<th className="border px-5 py-2 text-black font-rubik whitespace-nowrap">
						Action
					</th>
				</tr>
				{/* Content Row */}
				<tr>
					<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
						01
					</td>
					<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
						Photoshop
					</td>
					<td className="border px-5 py-2 text-center whitespace-nowrap">
						<img
							className="w-20 block mx-auto"
							src="https://i.ibb.co.com/fzxCfPCT/photoshop-white-icon.png"
							alt=""
						/>
					</td>
					<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
						09-Sep-2025
					</td>
					<td className="border text-center px-5 align-middle whitespace-nowrap">
						<span className="flex justify-center gap-3">
							<Link to={"/dashboard/edit-toolkit"}>
								<button className="w-10 h-10 rounded bg-yellow-400 flex items-center justify-center">
									<FaPen className="text-black" />
								</button>
							</Link>
							<button
								onClick={handleDeleteTollkit}
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

export default ToolkitTable;
