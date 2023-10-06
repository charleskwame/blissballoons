import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/navassets/logo.svg";
export const Mobilenav = () => {
	const [rotateBar, setRotateBar] = useState(false);

	const menu = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!menu.current.contains(event.target)) {
				setRotateBar(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleMenu = () => {
		setRotateBar(!rotateBar);
	};

	return (
		<>
			<div className="sticky z-10 w-full top-0">
				<nav className="bg-blue-800 sticky z-10  h-12 px-5 flex justify-between items-center md:hidden">
					<h1 className="text-white font-bold text-2xl md:text-3xl font-quicksand hover:text-blue-300">
						<Link to="/">Bliss.</Link>
					</h1>
					<div className="flex flex-col items-end gap-1 cursor-pointer" onClick={() => toggleMenu()} ref={menu} tabIndex="0">
						<div className={rotateBar ? "rotate-45 w-7 h-1 bg-white absolute transition-all duration-500 ease-in-out rounded-full" : "rotate-0 w-8 md:w-10 h-1 bg-white transition-all duration-500 ease-in-out rounded-full"}></div>
						<div className={rotateBar ? "translate-x-full w-7 h-1 bg-white transition-all duration-500 ease-in-out opacity-0 rounded-full" : "translate-x-0 w-6 md:w-7 h-1 bg-white transition-all duration-500 ease-in-out opacity-100 rounded-full"}></div>
						<div className={rotateBar ? "-rotate-45 w-7 h-1 bg-white absolute transition-all duration-500 ease-in-out rounded-full" : "rotate-0 w-4 md:w-5 h-1 bg-white transition-all duration-500 ease-in-out rounded-full"}></div>
					</div>
				</nav>

				<div className={rotateBar ? "h-fit mt-10 bg-blue-800 absolute z-10 w-full transition-all duration-500 ease-in-out top-0 md:hidden" : "h-fit mt-10 bg-blue-800 absolute -z-10 w-full transition-all duration-500 ease-in-out -top-[100vh] md:hidden"}>
					<div className="bg-blue-800 grid grid-flow-row gap-3 w-full py-5">
						<Link to="/destinations">
							<button className="w-full px-5 py-2 hover:bg-blue-300 hover:text-blue-800 font-semibold text-white text-left font-quicksand rounded-full">
								<FontAwesomeIcon icon={faMapLocation} /> Destinations
							</button>
						</Link>
						<Link to="/gallery">
							<button className=" w-full px-5 py-2 hover:bg-blue-300 hover:text-blue-800 font-semibold text-white text-left font-quicksand rounded-full">
								<FontAwesomeIcon icon={faImages} /> Gallery
							</button>
						</Link>

						<Link to="/about">
							<button className="w-full px-5 py-2 hover:bg-blue-300 hover:text-blue-800 font-semibold text-white text-left font-quicksand rounded-full flex items-center gap-[1px]">
								<img src={Logo} alt="" className="w-6" />
								About Us
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
