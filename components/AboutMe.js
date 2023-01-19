import { React, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";

export default function AboutMe({ open, onClose }) {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = "unset");
	}, []);

	if (!open) return null;
	return (
		<div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center bg-black bg-opacity-25">
			<div className="h-5/6 w-5/6 bg-white p-2 drop-shadow-lg">
				<button onClick={onClose}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div className="container flex flex-row px-4 mx-auto divide-x">
					<div className="pt-12 px-10 mx-5 w-1/2">
						<h1 className="text-4xl font-poppins font-extrabold text-mainBlack">
							About Me
						</h1>
						<h2 className="text-sm font-poppins font-light text-mainBlack mt-2">
							Interactive Front-End Developer.
						</h2>
						<p className="text-medium font-poppins font-light text-mainBlack mt-6">
							My full name is Vongdara Ryan De Lopez, and I'm a 19-year-old
							Cambodian-American from Northern Virginia pursuing a dual degree
							between the{" "}
							<span className="text-mainBlue">
								School of Engineering and Applied Sciences
							</span>{" "}
							and <span className="text-mainBlue">the Wharton School</span>. I'm
							majoring in Computer Science and concentrating in Operations,
							Information and Decisions (OIDD). Currently, I'm an incoming Tech
							Analyst intern at <span className="text-mainBlue">Accenture</span>
							!
						</p>
						<p className="text-medium font-poppins font-light text-mainBlack mt-4">
							As an aspiring entrepreneur, I love{" "}
							<span className="text-mainBlue">developing</span> new ideas and
							rich
							<span className="text-mainBlue"> web applications</span>. When not
							studying or coding, I love cooking, working out, and learning{" "}
							<span className="text-mainBlue">random </span>
							new skills such as chess, Rubik's cubing, and how to be a barista.
						</p>
						<div className="text-6xl flex justify-start gap-10 py-4 text-mainBlack">
							<div className="flex flex-col justify-center items-center">
								<div className="group/pic">
									<FaReact className="hover:text-mainBlue pb-4 flex justify-center items-center" />
									<div className="opacity-0 group-hover/pic:opacity-100 group-hover/pic:-translate-y-1 transition-all duration-500 flex justify-center items-center font-light font-poppins text-sm ease-in-out">
										React.js
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div className="group/pic">
									<SiTailwindcss className="hover:text-mainBlue pb-4 flex justify-center items-center" />
									<div className="opacity-0 group-hover/pic:opacity-100 group-hover/pic:-translate-y-1 transition-all duration-500 flex justify-center items-center font-light font-poppins text-sm ease-in-out">
										Tailwind CSS
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div className="group/pic">
									<IoLogoJavascript className="hover:text-mainBlue pb-4 flex justify-center items-center" />
									<div className="opacity-0 group-hover/pic:opacity-100 group-hover/pic:-translate-y-1 transition-all duration-500 flex justify-center items-center font-light font-poppins text-sm ease-in-out">
										JavaScript
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div className="group/pic">
									<AiFillHtml5 className="hover:text-mainBlue pb-4 flex justify-center items-center" />
									<div className="opacity-0 group-hover/pic:opacity-100 group-hover/pic:-translate-y-1 transition-all duration-500 flex justify-center items-center font-light font-poppins text-sm ease-in-out">
										HTML
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-12 px-10 mx-5 w-1/2">
						<div className="flex justify-center flex-col px-10">
							<h1 className="text-4xl font-poppins font-extrabold text-mainBlack">
								Let's talk!
							</h1>
							<h2 className="text-sm font-poppins font-light text-mainBlack mt-2">
								New projects, opportunities, or just want to say hi? My inbox is
								always open.
							</h2>
							<form action="" className="space-y-8 mt-6">
								<div>
									<label
										htmlFor="name"
										className="block mb-2 font-poppins text-xs font-light text-mainBlack"
									>
										Name *
									</label>
									<input
										type="text"
										className="outline-none border-b-2 border-lightGray w-full text-sm font-poppins font-light text-mainBlack"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 font-poppins text-xs font-light text-mainBlack"
									>
										Email *
									</label>
									<input
										type="email"
										className="outline-none border-b-2 border-lightGray w-full text-sm font-poppins font-light text-mainBlack"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block mb-2 font-poppins text-xs font-light text-mainBlack"
									>
										Message *
									</label>
									<textarea
										rows="4"
										className="outline-none border-b-2 border-lightGray w-full text-sm font-poppins font-light text-mainBlack resize-none"
									/>
								</div>
								<button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-poppins font-light text-mainBlue border-2 border-mainBlue rounded-full hover:text-white group hover:bg-gray-50">
									<span className="overflow-hidden absolute left-0 block w-full h-0 transition-all bg-mainBlue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
									<span className="overflow-hidden absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											></path>
										</svg>
									</span>
									<span class="relative">Send Message</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
