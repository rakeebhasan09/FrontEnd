const AboutMe = () => {
	return (
		<div className="container">
			<div className="grid grid-cols-12 items-start gap-8 lg:gap-7 xl:gap-14">
				<div className="grid h-full col-span-12 lg:col-span-5">
					<img
						className="w-[300px] md:w-[400px] mx-auto lg:w-full h-full block border-[5px] border-brand"
						src="https://scontent.fdac202-1.fna.fbcdn.net/v/t39.30808-6/491863280_1705105527088640_1866499037970272028_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGnHNHwpwSv0aSW-kosbjJeFOmCXzOZPdMU6YJfM5k902P9bbALilluhOwmH2rubwa39kcuAvBH0QOFFmcicCad&_nc_ohc=6GpHRd9HKvEQ7kNvwG0Kc9e&_nc_oc=AdlOyDsTxag1rQU9NMmUrjveGAPKG3zsvh442iUUb5BYCUfswpvBSURXT3_npY3AF9w&_nc_zt=23&_nc_ht=scontent.fdac202-1.fna&_nc_gid=DCoDmvOrDFWcVZg71CPMQA&oh=00_AfY9sN8cpFfvFW-75n0ueH1Y214nqRYjKOGccVPlIXAqGg&oe=68D40571"
						alt=""
					/>
				</div>
				<div className="grid col-span-12 lg:col-span-7">
					<div className="flex items-center gap-3 md:gap-x-5 lg:gap-x-[30px] mb-4 md:mb-5 lg:mb-[10px]">
						<h2 className="text-white text-[28px] md:text-[32px] font-rajdhani font-bold">
							Who i am?
						</h2>
						<img
							alt=""
							src="https://i.ibb.co.com/1GzsVfYh/custom-line.png"
						/>
					</div>
					<div>
						<h2 className="text-[35px] md:text-[60px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-brand font-rajdhani font-bold leading-[100%]">
							Front-End Focused <br /> MERN Stack Developer.
						</h2>
						<p className="text-white text-[18px] font-rajdhani font-medium mt-4 ">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Ut provident voluptas facilis laboriosam.
							Corporis reprehenderit blanditiis provident expedita
							quisquam molestiae incidunt at doloremque repellat
							temporibus voluptatem recusandae, maiores modi
							similique tempora maxime asperiores in non a sequi
							enim assumenda. Magnam tempora vel, eaque ipsa
							corporis repudiandae perferendis iure maiores ut.
						</p>
					</div>
					<ul className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-y-2">
						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								Name :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								MD Rakeeb Hasan
							</span>
						</li>
						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								Profession :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								Web Developer
							</span>
						</li>
						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								Degree :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								BS.c in Physics
							</span>
						</li>
						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								Experience :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								4 years+
							</span>
						</li>
						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								Age :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								23 years
							</span>
						</li>

						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								City :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								Sherpur
							</span>
						</li>
						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								Mobile :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								+8801701028688
							</span>
						</li>
						<li className="text-white text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								E-mail :
							</span>
							<span className="col-span-8 2xl:col-span-9">
								rakeebhasan1@gmail.com
							</span>
						</li>
						<li className="text-white text-[18px] lg:text-[16px] xl:text-[18px] font-rajdhani grid grid-cols-12">
							<span className="col-span-4 2xl:col-span-3">
								Residence:
							</span>
							<span className="col-span-8 2xl:col-span-9">
								Mymensingh, Bangladesh
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
