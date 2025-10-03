import { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ToolkitTable = () => {
	const [toolkits, setToolkits] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api/toolits")
			.then((res) => res.json())
			.then((data) => setToolkits(data))
			.catch((err) => console.log(err));
	}, []);
	// Toolkit Delete Handling
	const handleDeleteTollkit = (toolkit) => {
		Swal.fire({
			title: "Are you sure?",
			text: `You won't be able to revert ${toolkit.toolkit_name}!`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					const res = await fetch(
						`http://localhost:5000/api/delete-toolkit/${toolkit.id}`,
						{
							method: "DELETE",
						}
					);
					if (res.ok) {
						Swal.fire({
							title: "Deleted!",
							text: "Toolkit has been deleted.",
							icon: "success",
						}).then(() => {
							window.location.href = "/dashboard/toolkit";
						});
					} else {
						Swal.fire(
							"Error!",
							"Failed to delete Toolkit.",
							"error"
						);
					}
				} catch (err) {
					console.error(err);
					Swal.fire("Error!", "Something went wrong.", "error");
				}
			}
		});
	};
	return (
		<div className="mt-10 overflow-x-auto">
			<table className="w-full border border-collapse">
				<thead>
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
				</thead>

				{/* Content Row */}
				<tbody>
					{toolkits.map((toolkit) => (
						<tr key={toolkit.id}>
							<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
								{toolkit.id < 10
									? `0${toolkit.id}`
									: toolkit.id}
							</td>
							<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
								{toolkit.toolkit_name}
							</td>
							<td className="border px-5 py-2 text-center whitespace-nowrap">
								<img
									className="w-10 block mx-auto"
									src={toolkit.toolkit_image}
									alt={toolkit.toolkit_name}
								/>
							</td>
							<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
								{/* {toolkit.added_on} */}
								{new Date(toolkit.added_on).toLocaleDateString(
									"en-GB",
									{
										day: "2-digit",
										month: "short",
										year: "numeric",
									}
								)}
							</td>
							<td className="border text-center py-2 px-5 align-middle whitespace-nowrap">
								<span className="flex justify-center gap-3">
									<Link
										to={`/dashboard/edit-toolkit`}
										state={{ toolkit }}
									>
										<button className="w-10 h-10 rounded bg-yellow-400 flex items-center justify-center">
											<FaPen className="text-black" />
										</button>
									</Link>
									<button
										onClick={() =>
											handleDeleteTollkit(toolkit)
										}
										className="w-10 h-10 rounded bg-red-400 flex items-center justify-center"
									>
										<FaTrash className="text-white" />
									</button>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ToolkitTable;
