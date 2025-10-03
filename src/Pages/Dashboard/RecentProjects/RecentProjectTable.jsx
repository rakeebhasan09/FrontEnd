import { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RecentProjectTable = () => {
	const [recentProjects, setRecentProjects] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api/recent-projects")
			.then((res) => res.json())
			.then((data) => setRecentProjects(data))
			.catch((err) => console.log(err));
	}, []);
	// Toolkit Delete Handling
	const handleDeleteRecentProject = (recentProject) => {
		Swal.fire({
			title: "Are you sure?",
			text: `You won't be able to revert ${recentProject.name}!`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				const res = await fetch(
					`http://localhost:5000/api/delete-recent-project/${recentProject.id}`,
					{
						method: "DELETE",
					}
				);

				if (res.ok) {
					Swal.fire({
						title: "Deleted!",
						text: "Recent Project has been deleted.",
						icon: "success",
					}).then(() => {
						window.location.href = "/dashboard/recent-projects";
					});
				} else {
					Swal.fire("Error!", "Failed to delete Toolkit.", "error");
				}
			}
		});
	};
	return (
		<div className="mt-10 overflow-x-auto">
			<table className="w-full border border-collapse">
				<thead>
					<tr>
						<th className="w-3 border px-1 py-2 text-black font-rubik whitespace-nowrap">
							# No
						</th>
						<th className="w-[40%] border px-1 py-2 text-black font-rubik whitespace-nowrap">
							Project Name
						</th>
						<th className="w-[10%] border px-1 py-2 text-black font-rubik whitespace-nowrap">
							Live Link
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
				</thead>
				{/* Content Row */}
				<tbody>
					{recentProjects.map((recentProject) => (
						<tr key={recentProject.id}>
							<td className="w-3 border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
								{recentProject.id < 10
									? `0${recentProject.id}`
									: recentProject.id}
							</td>
							<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
								{recentProject.name}
							</td>
							<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
								<a href={recentProject.url}>Live Link</a>
							</td>
							<td className="border px-5 py-2 text-center whitespace-nowrap">
								<img
									className="w-20 block mx-auto"
									src={recentProject.thumbnail}
									alt={recentProject.name}
								/>
							</td>
							<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
								{new Date(
									recentProject.added_on
								).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "short",
									year: "numeric",
								})}
							</td>
							<td className="border text-center px-5 align-middle whitespace-nowrap">
								<span className="flex justify-center gap-3">
									<Link
										to={"/dashboard/edit-recent-project"}
										state={{ recentProject }}
									>
										<button className="w-10 h-10 rounded bg-yellow-400 flex items-center justify-center">
											<FaPen className="text-black" />
										</button>
									</Link>
									<button
										onClick={() =>
											handleDeleteRecentProject(
												recentProject
											)
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

export default RecentProjectTable;
