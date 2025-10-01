import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

// Import required CSS
import "yet-another-react-lightbox/styles.css";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Gallery() {
	const [images, setImages] = useState([]);
	const [activeCategory, setActiveCategory] = useState("All");
	const [lightboxIndex, setLightboxIndex] = useState(-1);

	useEffect(() => {
		fetch("projectsData.json")
			.then((res) => res.json())
			.then((data) => setImages(data));
	}, []);

	const filteredImages =
		activeCategory === "All"
			? images
			: images.filter((img) => img.category === activeCategory);

	const openLightbox = (id) => {
		const index = filteredImages.findIndex((img) => img.id === id);
		setLightboxIndex(index);
	};

	return (
		<div className="p-6">
			<div className="flex flex-wrap items-center justify-center gap-3 mb-10">
				{[
					"All",
					"Landing Page",
					"corporate",
					"e-commerce",
					"Dashboard",
				].map((cat) => (
					<button
						key={cat}
						onClick={() => setActiveCategory(cat)}
						className={`px-4 py-2 rounded transition uppercase  border-0 outline-none font-rubik ${
							activeCategory === cat
								? "bg-brand text-white"
								: "text-brand bg-white"
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4">
				<AnimatePresence>
					{filteredImages.map((img) => (
						<motion.div
							key={img.id}
							layout
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.4 }}
							className="relative group overflow-hidden "
						>
							<div
								style={{ backgroundImage: `url(${img.src})` }}
								className="h-[300px] md:h-[350px] xxl:h-[400px] bg-no-repeat transition-all duration-[10000ms] bg-cover bg-top hover:bg-bottom"
							></div>
							<div className="bg-[rgba(20,20,20,0.8)] flex flex-col gap-y-1 p-4 absolute bottom-0 w-full -left-[100%] transition-all duration-300 group-hover:left-0">
								<Link
									target="_blank"
									to={`${img.liveLink ? img.liveLink : "#"}`}
									className="text-[18px] capitalize md:text-[24px] md:mb-2 text-brand leading-[100%] font-rubik font-medium"
								>
									{img.name}
								</Link>
								<span className="text-brand leading-[100%] font-rubik font-medium">
									{img.technology}
								</span>
							</div>
							<button
								type="button"
								onClick={() => openLightbox(img.id)}
								className="absolute w-[60px] h-[45px] cursor-pointer flex items-center justify-center top-[-70px] transition-all duration-500 group-hover:top-0 right-0 bg-[#141414] p-2  text-white"
							>
								<GoSearch size={18} />
							</button>
						</motion.div>
					))}
				</AnimatePresence>
			</div>

			<Lightbox
				open={lightboxIndex >= 0}
				index={lightboxIndex}
				close={() => setLightboxIndex(-1)}
				slides={filteredImages.map((img) => ({
					src: img.src,
					title: img.name,
				}))}
				plugins={[Fullscreen, Zoom, Captions]}
			/>
		</div>
	);
}
