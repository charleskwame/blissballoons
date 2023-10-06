import { destinations } from "../data/data";
// import { Carousel } from "../components/bookingcomponents/carousel";
// import { Attractions } from "../components/bookingcomponents/attractions";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import BookingDetails from "../context/bookingcontext";
import { useContext } from "react";
import { Suspense, lazy } from "react";
import Logo from "../assets/navassets/logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { emailSent } from "../components/toasts";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { ImageLoader } from "../components/loaders/imageloader";
import { AttractionLoader } from "../components/loaders/attractionloader";
import { PageLoader } from "../components/loaders/pageloader";

const Carousel = lazy(() => import("../components/bookingcomponents/carousel"));
const Attractions = lazy(() => import("../components/bookingcomponents/attractions"));

const Destinations = () => {
	const { setLocation } = useContext(BookingDetails);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { location } = useContext(BookingDetails);
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
	const dialogRef = useRef();

	const body = document.body;

	const listRef = useRef();
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const opendialogbtns = document.querySelectorAll(".opendialogbtn");
		const closedialogbtns = document.querySelectorAll(".closedialogbtn");

		// intersection observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(!isVisible);
					}
				});
			},
			// intersection options
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5,
			}
		);

		// Observe each list item
		const listItems = listRef.current.querySelectorAll(".list");
		listItems.forEach((item) => {
			observer.observe(item);
		});

		const openDialog = () => {
			dialogRef.current.showModal();
			setIsDialogOpen(!isDialogOpen);
			body.style.overflow = "hidden";
		};
		const closeDialog = () => {
			dialogRef.current.close();
			setIsDialogOpen(!isDialogOpen);
			body.style.overflow = "";
		};
		const escToClose = (event) => {
			if ((isDialogOpen === true && event.key === "Escape") || event.keyCode === 27) {
				dialogRef.current.close();
				setIsDialogOpen(!isDialogOpen);
				body.style.overflow = "";
			}
		};
		opendialogbtns.forEach((opendialogbtn) => {
			opendialogbtn.addEventListener("click", openDialog);
		});
		closedialogbtns.forEach((closedialogbtn) => {
			closedialogbtn.addEventListener("click", closeDialog);
		});
		document.addEventListener("keydown", escToClose);

		return () => {
			opendialogbtns.forEach((opendialogbtn) => {
				opendialogbtn.removeEventListener("click", openDialog);
			});
			closedialogbtns.forEach((closedialogbtn) => {
				closedialogbtn.removeEventListener("click", closeDialog);
			});
			observer.disconnect();
		};
	}, []);

	// form validation schema
	const formSchema = yup.object().shape({
		name: yup.string().min(3).required(),
		email: yup.string().email().required(),
		location: yup.string().required(),
		date: yup.date().required(),
	});

	// form resolver
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	// close dialog seperately
	const closeDialog = () => {
		dialogRef.current.close();
		setIsDialogOpen(!isDialogOpen);
		body.style.overflow = "";
	};

	// send email to customer
	const form = useRef();
	const sendEmail = (data) => {
		emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY).then(
			() => {
				emailSent(data.name);
				closeDialog();
			},
			(error) => {
				console.log(error.text);
			}
		);
	};
	return (
		<motion.section className="px-5 md:px-10 pt-5 background background bg-fixed bg-no-repeat bg-center bg-cover bg-blue-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<h1 className="font-quicksand font-bold text-xl lg:text-2xl text-blue-800" tabIndex="0">
				<FontAwesomeIcon icon={faMapLocation} /> Destinations
			</h1>

			{/* toast pop up */}
			<ToastContainer icon={false} role="alert" />
			{/* dialog popup */}
			<dialog ref={dialogRef} className={`animate__animated lg:w-1/2 w-full backdrop:bg-blue-300 backdrop:bg-opacity-50 bg-transparent ${isDialogOpen ? "animate__zoomIn" : "animate__zoom"}`}>
				<button className="closedialogbtn absolute top-1 right-1">
					<FontAwesomeIcon icon={faCircleXmark} className="w-8 h-8 bg-white hover:text-red-800 transition-all duration-500 ease-in-out text-blue-800 rounded-full" />
				</button>
				<section className="bg-white border-2 border-blue-800 px-5 py-3 rounded-md">
					<div className="flex items-center gap-1">
						<img src={Logo} alt="logo" className="w-8 h-8" />
						<h2 className="text-xl font-bold font-quicksand text-blue-800">Booking Details</h2>
					</div>
					<form className="mt-3 grid gap-5" onSubmit={handleSubmit(sendEmail)} ref={form}>
						<div className="grid gap-3">
							<div className="grid gap-3 md:flex items-center">
								<div className="grid grid-flow-row gap-1 basis-1/2">
									<label htmlFor="name" className="font-quicksand font-bold">
										Name
									</label>
									<input type="text" id="name" name="name" autoComplete="name" placeholder="Enter your name" className="placeholder:font-quicksand placeholder:text-opacity-50 border-blue-800 border-2 px-3 py-2 rounded-md font-quicksand font-semibold" {...register("name")} />
									{errors.name ? <p className="text-xs font-quicksand text-red-600 font-semibold">Name is required</p> : null}
								</div>
								<div className="grid grid-flow-row gap-1 basis-1/2">
									<label htmlFor="email" className="font-quicksand font-bold">
										E-mail
									</label>
									<input type="email" id="email" name="email" autoComplete="email" placeholder="Enter your e-mail" className="placeholder:font-quicksand placeholder:text-opacity-50 border-blue-800 border-2 px-3 py-2 rounded-md font-quicksand font-semibold text-blue-800" {...register("email")} />
									{errors.email ? <p className="text-xs font-quicksand text-red-600 font-semibold">Email is required</p> : null}
								</div>
							</div>
							<div className="grid gap-3 md:flex items-center">
								<div className="grid gap-1 basis-1/2">
									<label htmlFor="location" className="font-quicksand font-bold">
										Location
									</label>
									<input type="location" value={location} name="location" id="location" required autoComplete="location" className="border-blue-800 border-2 px-3 py-2 rounded-md font-quicksand font-semibold" {...register("location")} />
									{/* {errors.location ? <p className="text-xs font-quicksand text-red-600 font-semibold">Location is required</p> : null} */}
								</div>
								<div className="grid gap-1 basis-1/2">
									<label htmlFor="start date" className="font-quicksand font-bold">
										Trip Date
									</label>
									<input type="date" min={date} name="date" defaultValue={date} id="start date" className="p-2 border-2 border-blue-800 font-quicksand font-semibold rounded-md" {...register("date")} />
								</div>
							</div>
						</div>
						<button className="w-full h-10 lg:h-12 bg-blue-800 font-quicksand font-bold text-white hover:bg-blue-300 hover:text-blue-800 border-2 border-blue-800 transition-all duration-500 ease-in-out rounded-md ">Book Trip</button>
					</form>
				</section>
			</dialog>
			<ul className="mt-5 md:grid grid-cols-2 lg:grid-cols-3 gap-2 pb-10" ref={listRef}>
				{destinations.map((destination, key) => {
					return (
						<li key={key} className={"list grid card bg-white items-center gap-5 mb-5 border-[2px] transition-all duration-500 ease-in-out p-5 rounded-md w-[100%] mx-auto hover:bg-[#1268ff38] backdrop-blur hover:text-white"} tabIndex="0">
							<div className="min-h-[194px] lg:min-h-[233px] flex justify-center items-center rounded-md w-full mx-auto">
								<Suspense fallback={<ImageLoader />}>
									<Carousel images={destination.images} />
								</Suspense>
							</div>
							<div className="grid md:flex flex-col gap-3">
								<div className="grid gap-2 lg:gap-5">
									<h1 className="font-quicksand text-lg lg:text-xl font-bold" tabIndex="0">
										{destination.name}
									</h1>
									<Suspense fallback={<AttractionLoader />}>
										<Attractions attractions={destination.attractions} />
									</Suspense>
								</div>
								<button className="opendialogbtn w-full h-10 lg:h-12 bg-blue-800 font-quicksand font-bold text-white hover:bg-blue-300 hover:text-blue-800 border-2 border-blue-800 transition-all duration-500 ease-in-out rounded-md" onClick={() => setLocation(destination.name)}>
									Book Now
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</motion.section>
	);
};

export default Destinations;
