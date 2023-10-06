import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/navassets/logo.svg";
import { faImages } from "@fortawesome/free-solid-svg-icons";
export const Tabletnav = () => {
	return (
		<>
			<nav className="hidden bg-blue-800 sticky z-10 w-full top-0 h-12 px-10 md:flex justify-between items-center">
				<h1 className="text-white font-bold text-2xl md:text-3xl font-quicksand transition-all duration-500 ease-in-out hover:text-blue-300">
					<Link to="/">Bliss.</Link>
				</h1>

				<div className="flex items-center gap-3">
					<Link to="/destinations">
						<button className="w-full px-5 py-2 hover:bg-blue-300 hover:text-blue-800 font-semibold text-white text-left font-quicksand rounded-full transition-all duration-500 ease-in-out">
							<FontAwesomeIcon icon={faMapLocation} /> Destinations
						</button>
					</Link>
					<Link to="/gallery">
						<button className="w-full px-5 py-2 hover:bg-blue-300 hover:text-blue-800 font-semibold text-white text-left font-quicksand rounded-full transition-all duration-500 ease-in-out">
							<FontAwesomeIcon icon={faImages} /> Gallery
						</button>
					</Link>
					<Link to="/about">
						<button className="w-full px-5 py-2 hover:bg-blue-300 hover:text-blue-800 font-semibold text-white text-left font-quicksand rounded-full transition-all duration-500 ease-in-out flex items-center gap-1">
							<img src={Logo} className="w-6" /> About Us
						</button>
					</Link>
				</div>
			</nav>
		</>
	);
};
