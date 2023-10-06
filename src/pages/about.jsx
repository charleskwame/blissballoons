import { Headers } from "../components/aboutcomponents/headers";
import { Paragraph } from "../components/aboutcomponents/paragraphs";
// import background from "../assets/aboutusassets/aboutbackground.jpg";
import { aboutUs } from "../data/aboutusdata";

const About = () => {
	return (
		// main section
		<section className="background bg-fixed bg-no-repeat bg-center bg-cover bg-blue-400">
			{/* scrollable section */}
			<section className="bg-[#1268ff38] backdrop-blur">
				<section className="py-5 md:w-3/4 px-5 lg:w-1/2 mx-auto lg:px-10 min-h-[100vh]">
					<h1 className="text-3xl font-quicksand font-semibold text-white border-b-[1px] border-blue-800">About Bliss.</h1>
					{aboutUs.map((info) => {
						return <Paragraph paragraph={info} />;
					})}
				</section>
			</section>
		</section>
	);
};

export default About;
