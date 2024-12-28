import { IoMdHome } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/UK-logo.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
	const menuItems = [
		{ title: "Home", icon: <IoMdHome size={24} />, path: "/" },
		{ title: "Experience", icon: <MdWork size={24} />, path: "/experience" },
		{ title: "Projects", icon: <AiFillCode size={24} />, path: "/projects" },
		{ title: "About", icon: <BiBookReader size={24} />, path: "/about" },
	];

	return (
		<div className="fixed left-0 top-0 h-screen z-10">
			<div className="h-full bg-black w-20 hover:w-64 transition-all duration-300">
				<div className="p-4">
					<nav>
						<ul className="flex flex-col h-screen">
							<li className="w-12 mb-12">
								<a href="/">
									<img src={logo} alt="logo" />
								</a>
							</li>
							{menuItems.map((item, index) => (
								<li key={index} className="mb-8">
									<Link
										to={item.path}
										className="flex items-center gap-4 text-white hover:text-black hover:bg-gray-100 p-3 rounded-lg transition-colors duration-200"
									>
										<span className="min-w-[24px]">{item.icon}</span>
										<span className="whitespace-nowrap overflow-hidden">
											{item.title}
										</span>
									</Link>
								</li>
							))}
							<div className="flex-grow" />
							<li>
								<a
									href="https://www.linkedin.com/in/usmankhld/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 text-white hover:text-black hover:bg-gray-100 p-3 rounded-lg transition-colors duration-200"
								>
									<span className="min-w-[24px]">
										<FaLinkedinIn size={24} />
									</span>
									<span className="whitespace-nowrap overflow-hidden">
										Linkedin
									</span>
								</a>
							</li>
							<li className="mb-4">
								<a
									href="https://github.com/UsmanKhld"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 text-white hover:text-black hover:bg-gray-100 p-3 rounded-lg transition-colors duration-200"
								>
									<span className="min-w-[24px]">
										<FaGithub size={24} />
									</span>
									<span className="whitespace-nowrap overflow-hidden">
										GitHub
									</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
