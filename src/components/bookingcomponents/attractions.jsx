import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Attractions = ({ attractions }) => {
	// the attractions are props which are mapped through to render the value of the attraction.name
	// this object is gotten from the destinations data
	return (
		<section className="">
			<ul className="grid gap-1">
				{attractions.map((attraction, key) => {
					return (
						<li className="flex items-center gap-2" key={key}>
							<FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-blue-800" />
							<p className="font-quicksand text-sm" tabIndex={0}>
								{attraction.name}
							</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Attractions;
