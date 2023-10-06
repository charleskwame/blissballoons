// import BookingDetails from "../context/bookingcontext";
import BookingDetails from "../../context/bookingcontext";
import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
// import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "animate.css";

const Carousel = ({ images }) => {
	// passed an images object to the carousel component
	// the carousel image uses the image's sliderIndex image to display only one image and change when the slider index also changes
	// the next and previous buttons work using the image object's length. The image object is an array of objects of images
	// this approach was taken to because I wanted each carousel to control it's own slider index so they don't all change when the slider index for one changes
	const [sliderIndex, setSliderIndex] = useState(0);
	const [imageLoaded, setImageLoaded] = useState(false);
	// const [animate, setAnimate] = useState(false);
	const { details } = useContext(BookingDetails);

	const next = () => {
		if (sliderIndex >= images.length - 1) {
			setSliderIndex(0); // Start from the beginning
		} else {
			setSliderIndex(sliderIndex + 1);
		}
	};

	const prev = () => {
		if (sliderIndex <= 0) {
			setSliderIndex(images.length - 1); // Go to the last image
		} else {
			setSliderIndex(sliderIndex - 1);
		}
	};
	return (
		<div className="relative">
			<div className="flex items-center transition-transform ease-in-out duration-500">
				<div className="absolute z-[1] mx-1">
					<button onClick={() => prev()} className="text-white hover:bg-blue-800 transition-all duration-500 ease-in-out hover:rounded-full w-8 h-8 text-center">
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
				</div>
				{/* image */}
				<LazyLoadImage src={images[sliderIndex].image} placeholderSrc={images[sliderIndex].placeholder} effect="blur" alt={images[sliderIndex].image} className="rounded-md w-full" />
				<div className="absolute z-[1] right-0 mx-1">
					<button onClick={() => next()} className="text-white hover:bg-blue-800 transition-all duration-500 ease-in-out hover:rounded-full w-8 h-8 text-center">
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

// useEffect(() => {
// 	const image = new Image();
// 	image.onload = () => {
// 		setImageLoaded(true);
// 	};
// 	image.src = images[sliderIndex].image;
// 	// console.log(images[sliderIndex].image + " loaded");
// }, [images[sliderIndex].image]);
