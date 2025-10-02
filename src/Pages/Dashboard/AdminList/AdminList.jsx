import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminList = () => {
	const [admins, setAdmins] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api/registerd-admins")
			.then((res) => res.json())
			.then((data) => setAdmins(data))
			.catch((err) => console.log(err));
	}, []);

	// Admin Delete Handler
	const deleteAdminHandler = (adminID) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					const res = await fetch(
						`http://localhost:5000/api/delete-admin/${adminID}`,
						{
							method: "DELETE",
						}
					);

					if (res.ok) {
						Swal.fire({
							title: "Deleted!",
							text: "Admin has been deleted.",
							icon: "success",
						}).then(() => {
							window.location.href = "/dashboard/admin-list";
						});
					} else {
						Swal.fire(
							"Error!",
							"Failed to delete contact.",
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
		<>
			<Helmet>
				<title>All Admin List Here</title>
			</Helmet>
			<div className="p-5 lg:p-10">
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th className="text-[18px] text-slate-600">
									Name
								</th>
								<th className="text-[18px] text-slate-600">
									E-mail
								</th>
								<th className="text-[18px] text-slate-600">
									Mobile
								</th>
								<th className="text-[18px] text-slate-600">
									Address
								</th>
								<th className="text-[18px] text-slate-600">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{admins.map((admin) => (
								<tr key={admin.id}>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle h-12 w-12">
													<img
														src={
															admin.profile_picture
														}
														alt={admin.name}
													/>
												</div>
											</div>
											<div>
												<div className="font-bold">
													{admin.name}
												</div>
											</div>
										</div>
									</td>
									<td>{admin.email}</td>
									<td>{admin.mobile}</td>
									<td>{admin.address}</td>
									<th>
										{admin.id === 1 ? (
											""
										) : (
											<button
												onClick={() =>
													deleteAdminHandler(admin.id)
												}
												className="w-10 h-10 rounded bg-red-400 flex items-center justify-center"
											>
												<FaTrash className="text-white" />
											</button>
										)}
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AdminList;
