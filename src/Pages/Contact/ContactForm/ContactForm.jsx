import { toast } from "react-toastify";

const ContactForm = () => {
	const fromSubmitHandler = (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const subject = event.target.subject.value;
		const message = event.target.message.value;
		if (name === "" || email === "" || subject === "" || message === "") {
			toast.warn("All fields are required!");
			return;
		}
		event.target.reset();
		toast.success("Thanks for contact.");
	};
	return (
		<div className="container">
			<div className="pb-10">
				<h2 className="text-white text-center text-[28px] md:text-[32px] font-rajdhani font-bold">
					If You Have Any Query
				</h2>
				<div className="relative w-[200px] h-[5px] bg-[#2b2a2a] mx-auto mt-2">
					<div className="absolute top-0 w-[15px] h-[5px] bg-brand animate-mymove"></div>
				</div>
			</div>
			<form
				onSubmit={fromSubmitHandler}
				className="max-w-5xl mx-auto flex flex-col gap-5"
			>
				<div className="input-row grid md:grid-cols-2 gap-5 md:gap-10">
					<div className="single-input">
						<input
							className="w-full py-3 px-5 border-none outline-none rounded text-[#141414] font-rubik"
							type="text"
							name="name"
							placeholder="Enter Your Name"
						/>
					</div>
					<div className="single-input">
						<input
							className="w-full py-3 px-5 border-none outline-none rounded text-[#141414] font-rubik"
							type="email"
							name="email"
							placeholder="Enter Your E-mail"
						/>
					</div>
				</div>
				<div className="input-row">
					<div className="single-input">
						<input
							className="w-full py-3 px-5 border-none outline-none rounded text-[#141414] font-rubik"
							type="text"
							name="subject"
							placeholder="Subject"
						/>
					</div>
				</div>
				<div className="input-row">
					<div className="single-input">
						<textarea
							className="w-full py-3 px-5 border-none outline-none rounded text-[#141414] font-rubik resize-none"
							placeholder="Write Your Message"
							name="message"
							rows={10}
						></textarea>
					</div>
				</div>
				<button className="bg-brand w-[200px] mx-auto py-3 text-[#fff] font-rubik font-medium uppercase border-none outline-none rounded mt-5">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
