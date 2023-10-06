import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export const ImageLoader = () => {
	return (
		<div className="w-fit loaderimage">
			<FontAwesomeIcon icon={faImage} className="text-7xl" />
		</div>
	);
};
