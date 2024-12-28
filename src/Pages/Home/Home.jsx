import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import pfp from "../../assets/pfp.jpeg"; // Add this import for your profile picture
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
	return (
		<div>
			<main>
				<div className="w-full h-screen flex items-center justify-center">
					<div className="container w-1/2 h-1/2 mx-auto flex items-center justify-between">
						<div className="text-white flex flex-col justify-between py-16 h-full w-2/3 text-center  ">
							<div>
								<p className="text-7xl font-josefin">Hi, I'm Usman</p>
							</div>
							<div>
								<p className="flex space-x-4 justify-center">
									<a
										href="https://www.linkedin.com/in/usmankhld/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-blue-200  transition-colors duration-200"
									>
										<FaLinkedinIn size={36} />
									</a>
									<a
										href="https://github.com/UsmanKhld"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-blue-200 transition-all"
									>
										<FaGithub size={36} />
									</a>
								</p>
							</div>
							<div>
								<p className="text-2xl font-light ">Computer Science Senior</p>
								<p className="text-xl font-extralight mt-2">
									Transforming ideas into code and bringing solutions to life
								</p>
								<p className="text-2xl font-light mt-6">Specializing in</p>
								<p className="text-xl font-extralight mt-2">
									Full-Stack Development • Artificial Intelligence • Machine
									Learning
								</p>
							</div>
						</div>
						<div className="ml-8">
							<img
								src={pfp}
								alt="Usman's profile picture"
								className="rounded-full w-64 h-64 object-cover"
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
