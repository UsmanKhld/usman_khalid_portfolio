import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";

const Home = () => {
	return (
		<div>
			<Navbar />
			<main>
				<div className="w-full h-screen border border-white flex items-center justify-center">
					<div className="border border-white w-2/3 h-2/3 flex">
						<h1 className="text-7xl">Hi I'm Usman</h1>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
