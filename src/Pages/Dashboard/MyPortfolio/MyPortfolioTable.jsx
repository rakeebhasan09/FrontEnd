import { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPortfolioTable = () => {
	const [portfolios, setPortfolios] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api/portfolios")
			.then((res) => res.json())
			.then((data) => setPortfolios(data))
			.catch((err) => console.log(err));
	}, []);
	// Toolkit Delete Handling
	const handleDeletePortfolio = (portfolio) => {
		Swal.fire({
			title: "Are you sure?",
			text: `You won't be able to revert ${portfolio.name}!`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					const res = await fetch(
						`http://localhost:5000/api/portfolios/${portfolio.id}`,
						{
							method: "DELETE",
						}
					);
					if (res.ok) {
						Swal.fire({
							title: "Deleted!",
							text: "Portfolio has been deleted.",
							icon: "success",
						}).then(() => {
							window.location.href = "/dashboard/portfolio";
						});
					} else {
						Swal.fire(
							"Error!",
							"Failed to delete Toolkit.",
							"error"
						);
					}
				} catch (error) {
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
				</thead>
				{/* Content Row */}
				<tbody>
					{portfolios.map((portfolio) => (
						<tr key={portfolio.id}>
							<td className="w-3 border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
								{portfolio.id < 10
									? `0${portfolio.id}`
									: portfolio.id}
							</td>
							<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap capitalize">
								{portfolio.name}
							</td>
							<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
								<a href={portfolio.live_link}>Live Link</a>
							</td>
							<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
								{portfolio.technologies}
							</td>
							<td className="border px-5 py-2 text-[17px] text-black font-rubik whitespace-nowrap">
								{portfolio.catagoryes}
							</td>
							<td className="border px-5 py-2 text-center whitespace-nowrap">
								<img
									className="w-20 block mx-auto"
									src={portfolio.thumbnail}
									alt={portfolio.name}
								/>
							</td>

							<td className="border px-5 py-2 text-center text-[17px] text-black font-rubik whitespace-nowrap">
								{new Date(
									portfolio.added_on
								).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "short",
									year: "numeric",
								})}
							</td>
							<td className="border text-center px-5 align-middle whitespace-nowrap">
								<span className="flex justify-center gap-3">
									<Link
										to={"/dashboard/edit-portfolio"}
										state={{ portfolio }}
									>
										<button className="w-10 h-10 rounded bg-yellow-400 flex items-center justify-center">
											<FaPen className="text-black" />
										</button>
									</Link>
									<button
										onClick={() =>
											handleDeletePortfolio(portfolio)
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

export default MyPortfolioTable;
