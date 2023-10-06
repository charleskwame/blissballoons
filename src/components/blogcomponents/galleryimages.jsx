import { useState, useRef, useEffect } from "react";
import { galleryImages } from "../../data/gallerydata";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCamera, faQuoteLeft, faQuoteRight, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const GalleryImages = () => {
	const [galleryIndex, setGalleryIndex] = useState(0);
	const nextImage = () => {
		if (galleryIndex >= galleryImages.length - 1) {
			setGalleryIndex(0); //start from the begining
		} else {
			setGalleryIndex(galleryIndex + 1);
		}
	};
	const prevImage = () => {
		if (galleryIndex <= 0) {
			setGalleryIndex(galleryImages.length - 1); //go to last image
		} else {
			setGalleryIndex(galleryIndex - 1);
		}
	};

	return (
		<>
			<section className="gallerybackground bg-fixed bg-no-repeat bg-center bg-cover bg-blue-400 flex flex-col md:flex-row items-center justify-between">
				{/* carousel */}
				<section className="px-5 md:px-0 pb-3 md:pb-0 md:pr-10 mt-3 md:mt-0 md:basis-1/2">
					<div className="">
						<div className="relative w-fit">
							{/* button left */}
							<div className="absolute top-1/2 pl-5">
								<button onClick={() => prevImage()} className=" text-white hover:bg-blue-800 transition-all duration-500 ease-in-out hover:rounded-full w-8 h-8 text-center">
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
							</div>
							<div className="">
								{/* main image */}
								<img src={galleryImages[galleryIndex].image} className="w-full" id="carouselimage" />
							</div>
							{/* button right */}
							<div className="absolute top-1/2 right-0 pr-5">
								<button onClick={() => nextImage()} className="text-white hover:bg-blue-800 transition-all duration-500 ease-in-out hover:rounded-full w-8 h-8 text-center">
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
							{/* image number */}
							<p className="bg-[#1268ff38] backdrop-blur absolute top-0 right-0 px-5 py-2 text-sm font-bold font-quicksand text-white">
								{galleryImages.indexOf(galleryImages[galleryIndex]) + 1} / {galleryImages.length}
							</p>
						</div>
					</div>
				</section>
				{/* image info section */}
				<section className="w-full md:order-first md:self-stretch flex flex-col justify-center px-5 md:pl-10 items-center basis-1/2 gap-5 bg-[#1268ff38] backdrop-blur mt-1 py-2">
					{/* description */}
					<section className="w-full relative">
						<FontAwesomeIcon icon={faQuoteLeft} className="text-2xl text-white" />
						<p className="text-lg font-quicksand font-semibold text-white">{galleryImages[galleryIndex].photoDescription}</p>
						<FontAwesomeIcon icon={faQuoteRight} className="text-2xl absolute bottom-0 right-0 text-white" />
					</section>
					<section className="flex justify-between w-full">
						{/* about Image */}
						<section className="flex items-center gap-2">
							<FontAwesomeIcon icon={faCamera} className="text-white" />
							<p className="font-quicksand font-semibold text-white">{galleryImages[galleryIndex].photoBy}</p>
						</section>
						{/* Image date */}
						<section className="flex items-center gap-2">
							<FontAwesomeIcon icon={faCalendarDays} className="text-white" />
							<p className="font-quicksand font-semibold text-sm text-white">{galleryImages[galleryIndex].date}</p>
						</section>
					</section>
				</section>
			</section>
		</>
	);
};
{
	/* bottom images */
}
{
	/* <div className="grid grid-cols-6 gap-1 md:grid-cols-8 md:w-[50vw] mx-auto">
	{galleryImages.map((galleryImage) => {
		return <img src={galleryImage} onClick={() => setAndUpdateImageIndex(galleryImages, galleryImage)} />;
	})}
</div> */
}

// const [isDialogOpen, setIsDialogOpen] = useState(false);
// const [dialogImage, setDialogImage] = useState();
// const imagepopup = useRef();
// const body = document.body;

// useEffect(() => {
// 	// getting all images and the dialog
// 	const images = document.querySelectorAll(".images");
// 	const dialog = document.querySelector(".closedialog");

// 	// function to open dialog
// 	const showFullScreen = () => {
// 		imagepopup.current.showModal();
// 		setIsDialogOpen(!isDialogOpen);
// 		body.style.overflow = "hidden";
// 	};

// 	// function to close dialog
// 	const closeFullScreen = () => {
// 		imagepopup.current.close();
// 		setIsDialogOpen(!isDialogOpen);
// 		body.style.overflow = "";
// 		setDialogImage("");
// 	};

// 	// function to close on esc press
// 	const escToClose = (event) => {
// 		if ((isDialogOpen === true && event.key === "Escape") || event.keyCode === 27) {
// 			imagepopup.current.close();
// 			setIsDialogOpen(!isDialogOpen);
// 			body.style.overflow = "";
// 			setDialogImage("");
// 		}
// 	};

// 	// adding event listeners
// 	images.forEach((image) => {
// 		image.addEventListener("click", showFullScreen);
// 	});

// 	dialog.addEventListener("click", closeFullScreen);

// 	document.addEventListener("keydown", escToClose);

// 	// clean up
// 	return () => {
// 		images.forEach((image) => {
// 			image.removeEventListener("click", showFullScreen);
// 		});

// 		dialog.removeEventListener("click", closeFullScreen);
// 	};
// }, []);
// return (
// 	<>
// 		<dialog ref={imagepopup} className={`animate__animated w-fit backdrop:bg-blue-300 backdrop:bg-opacity-50 bg-transparent ${isDialogOpen ? "animate__zoomIn" : "animate__zoom"}`}>
// 			<button className="closedialog absolute top-0 right-0">
// 				<FontAwesomeIcon icon={faCircleXmark} className="w-8 h-8 bg-white hover:text-red-800 transition-all duration-500 ease-in-out text-blue-800 rounded-full" />
// 			</button>
// 			<img src={dialogImage} className="rounded-md" />
// 		</dialog>
// 		<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
// 			{galleryImages.map((image, key) => {
// 				return (
// 					<>
// 						<div className="">
// 							<img src={image} className="images rounded-t-md hover:opacity-70 transition-opacity duration-500 ease-in-out" onClick={() => setDialogImage(image)} />
// 							<p className="bg-blue-800 font-quicksand font-semibold text-sm px-5 text-white py-2 rounded-b-md">Image 00{key}</p>
// 						</div>
// 					</>
// 				);
// 			})}
// 		</div>
// 	</>
// );
