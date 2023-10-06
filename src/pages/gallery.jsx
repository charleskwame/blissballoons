import { faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { lazy, Suspense, useEffect, useRef } from "react";
import { GalleryImages } from "../components/blogcomponents/galleryimages";

// const GalleryImages = lazy(() => import("../components/blogcomponents/galleryimages"))

const Gallery = () => {
	const main = useRef();
	useEffect(() => {
		// setting the height
		main.current.style.height = window.innerHeight - 48 + "px";
	});

	return (
		<section ref={main} className="gallerybackground bg-fixed bg-no-repeat bg-center bg-cover bg-blue-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<h1 className="font-quicksand font-bold text-xl px-5 md:px-10 py-3  lg:text-2xl text-blue-800" tabIndex="0">
				<FontAwesomeIcon icon={faImages} /> Gallery
			</h1>

			<GalleryImages />
		</section>
	);
};

export default Gallery;
