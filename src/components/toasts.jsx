// export const Toasts = () => {

// }
import { toast } from "react-toastify";
import Logo from "../assets/navassets/logo.svg";

export const emailSent = (name) =>
	toast.success(
		<div className="flex items-center gap-3 pl-1">
			<div className="animate-[spin_0.7s_ease-in-out]">
				<img src={Logo} alt="" className="w-10 h-10" />
			</div>
			<div className="w-fit">
				<p className="text-sm font-quicksand text-blue-800 font-bold">UP, UP AND AWAY!!!</p>
				<p className="text-xs font-quicksand text-blue-800 font-semibold">Hi {name}, your trip has been booked</p>
				<p className="text-xs font-quicksand text-blue-800 font-semibold">Check your email/spam folder</p>
			</div>
		</div>
	);
