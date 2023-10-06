import { createContext } from "react";
import { useState } from "react";

const BookingDetails = createContext();

export const BookingDetailsProvider = ({ children }) => {
	const [details, setDetails] = useState([]);
	const [sliderIndex, setSliderIndex] = useState(0);
	const [location, setLocation] = useState("");
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// const [openBookNow, setOpenBookNow] = useState(false);

	// const toggleBooking = () => {
	// 	if (openBookNow === true) {
	// 		setOpenBookNow(false);
	// 	} else {
	// 		setOpenBookNow(true);
	// 	}
	// };
	const value = { details, setDetails, sliderIndex, setSliderIndex, location, setLocation, isDialogOpen, setIsDialogOpen };
	return <BookingDetails.Provider value={value}>{children}</BookingDetails.Provider>;
};

export default BookingDetails;
