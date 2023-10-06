import "./App.css";
// import { Mobilenav } from "./components/navcomponents/mobilenav";
import { Navbar } from "./components/navcomponents/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { BookingDetailsProvider } from "./context/bookingcontext";

import { AnimatedRoutes } from "./components/animatedroutes";

function App() {
	return (
		<BookingDetailsProvider>
			<Router>
				<Navbar />
				<AnimatedRoutes />
			</Router>
		</BookingDetailsProvider>
	);
}

export default App;
