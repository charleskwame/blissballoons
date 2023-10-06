import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { PageLoader } from "./loaders/pageloader";

const Home = lazy(() => import("../pages/homepage"));
const Destinations = lazy(() => import("../pages/destinations"));
const About = lazy(() => import("../pages/about"));
const Gallery = lazy(() => import("../pages/gallery"));

export const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<>
			<AnimatePresence>
				<Suspense fallback={<PageLoader />}>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/destinations" element={<Destinations />} />
						<Route path="/about" element={<About />} />
						<Route path="/gallery" element={<Gallery />} />
					</Routes>
				</Suspense>
			</AnimatePresence>
		</>
	);
};
