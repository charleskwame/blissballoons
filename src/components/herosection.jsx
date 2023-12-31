import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Hero = () => {
	const hero = useRef();
	const svgVariant = {
		initial: { opacity: 0, pathLength: 0 },
		animate: {
			opacity: 1,
			pathLength: 1,
			transition: {
				duration: 3,
				ease: "easeInOut",
			},
		},
	};
	useEffect(() => {
		// setting the height
		// let main = document.getElementById("mainHero");
		hero.current.style.height = window.innerHeight - 48 + "px";
	});

	return (
		<motion.section className="w-full bg-blue-300" ref={hero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div></div>
			<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 grid gap-5 z-[2]">
				<div className="flex items-center w-fit mx-auto gap-2" tabIndex={0} aria-label="Bliss">
					<div className="w-fit bg-blue-800 rounded-md relative z-[5]">
						<svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<motion.path variants={svgVariant} initial="initial" animate="animate" d="M6 12H12.5C14.9853 12 17 9.98528 17 7.5C17 5.01472 14.9853 3 12.5 3H6V12ZM6 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H6V12Z" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></motion.path>
							</g>
						</svg>
					</div>
					<div className="flex items-center gap-2">
						<motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.1 }} className="w-1 h-1 bg-white rounded-full"></motion.div>
						<motion.p initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.1 }} className="text-6xl font-semibold font-quicksand text-blue-800">
							L
						</motion.p>
						<motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="w-1 h-1 bg-white rounded-full"></motion.div>
						<motion.p initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-6xl font-semibold font-quicksand text-blue-800">
							I
						</motion.p>
						<motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }} className="w-1 h-1 bg-white rounded-full"></motion.div>
						<motion.p initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-6xl font-semibold font-quicksand text-blue-800">
							S
						</motion.p>
						<motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }} className="w-1 h-1 bg-white rounded-full"></motion.div>
						<motion.p initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }} className="text-6xl font-semibold font-quicksand text-blue-800">
							S
						</motion.p>
					</div>
				</div>
				<div className="flex items-center gap-2 justify-between">
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-blue-800 text-sm font-semibold md:text-base font-quicksand">
						Exotic
					</motion.p>
					<div className="w-1 h-1 bg-white rounded-full"></div>
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="text-blue-800 text-sm font-semibold md:text-base font-quicksand">
						Affordable
					</motion.p>
					<div className="w-1 h-1 bg-white rounded-full"></div>
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className="text-blue-800 text-sm font-semibold md:text-base font-quicksand">
						Hot-Air Balloons
					</motion.p>
				</div>

				<div className="flex items-center gap-5 w-2/4 mx-auto">
					<Link to="/destinations" className="w-full">
						<motion.button animate={{ opacity: [0, 1] }} transition={{ duration: 2 }} className="border-2 border-blue-800 bg-blue-800 hover:bg-transparent hover:text-blue-800 text-lg md:text-xl transition-all duration-500 w-full rounded-full  py-2 text-white font-semibold">
							Destinaitons
						</motion.button>
					</Link>
				</div>
			</div>

			<div className="pl-3 md:pl-40">
				<motion.svg initial={{ y: 300 }} animate={{ y: 100 }} transition={{ duration: 40 }} height="64px" width="64px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<g>
							<path
								style={{
									fill: "#F7B239",
								}}
								d="M256.003,232.495v117.749h-51.21l-0.012-0.06c-0.428-2.452-0.94-4.891-1.523-7.307L180.23,232.495 C201.568,212.572,234.665,212.572,256.003,232.495z"
							/>
							<path
								style={{
									fill: "#F7B239",
								}}
								d="M394.043,223.176c-10.104,22.207-25.397,41.546-44.343,56.47 c-20.137,15.852-34.537,37.738-40.749,62.397l22.85-109.549C349.01,216.44,373.883,213.334,394.043,223.176z"
							/>
							<path
								style={{
									fill: "#F7B239",
								}}
								d="M331.801,232.495l-22.85,109.549c-0.69,2.702-1.273,5.427-1.749,8.188v0.012h-51.198V232.495h0.012 c21.339-19.922,54.435-19.922,75.774,0H331.801z"
							/>
						</g>
						<g>
							<path
								style={{
									fill: "#F95428",
								}}
								d="M340.013,34.319c13.77,9.188,25.932,20.553,36.013,33.608 c-29.883,30.74-71.68,49.841-117.927,49.841c-47.39,0-90.091-20.041-120.093-52.115c10.354-12.829,22.743-23.957,36.667-32.871 c20.982,22.017,50.603,35.751,83.426,35.751C290.148,68.534,319.138,55.443,340.013,34.319z"
							/>
							<path
								style={{
									fill: "#F95428",
								}}
								d="M407.575,160.315c0,0.06,0,0.131,0,0.19c0,22.35-4.844,43.582-13.531,62.671 c-20.16-9.842-45.033-6.736-62.242,9.319h-0.012c-21.339-19.922-54.435-19.922-75.774,0h-0.012 c-21.339-19.922-54.435-19.922-75.774,0h-0.012l-0.012-0.012c-17.221-16.054-42.07-19.161-62.242-9.307l0.036,0.083 c-8.747-19.173-13.603-40.487-13.579-62.945L407.575,160.315L407.575,160.315z"
							/>
						</g>
						<g>
							<path
								style={{
									fill: "#E54728",
								}}
								d="M138.005,65.654c10.354-12.829,22.743-23.957,36.667-32.871c7.498,7.867,16.09,14.674,25.551,20.172 c-2.118,4.011-4.13,8.247-6.01,12.698c-4.368,10.366-8.045,21.826-10.889,34.156C166.282,91.098,150.965,79.495,138.005,65.654z"
							/>
							<path
								style={{
									fill: "#E54728",
								}}
								d="M185.05,228.472c-1.666,1.238-3.273,2.583-4.82,4.023h-0.012l-0.012-0.012 c-17.221-16.054-42.07-19.161-62.242-9.307c-8.723-19.149-13.567-40.44-13.543-62.861h72.215 c-0.012,22.457,2.523,43.772,7.105,62.945C184.157,225.021,184.597,226.758,185.05,228.472z"
							/>
						</g>
						<path
							style={{
								fill: "#2BA5F7",
							}}
							d="M340.013,34.319c-20.874,21.124-49.865,34.215-81.915,34.215c-32.823,0-62.445-13.734-83.426-35.751 c24.1-15.436,52.793-24.254,83.426-23.838C288.374,9.35,316.508,18.645,340.013,34.319z"
						/>
						<path
							style={{
								fill: "#F7B239",
							}}
							d="M407.575,160.315H104.42c0.048-35.774,12.651-68.705,33.585-94.661 c30.002,32.073,72.703,52.115,120.093,52.115c46.247,0,88.044-19.101,117.927-49.841 C395.769,93.491,407.527,125.528,407.575,160.315z"
						/>
						<path
							style={{
								fill: "#E09B2D",
							}}
							d="M183.324,99.81c-4.284,18.542-6.676,39.012-6.688,60.505H104.42 c0.048-35.774,12.651-68.705,33.585-94.661C150.965,79.495,166.282,91.098,183.324,99.81z"
						/>
						<path
							style={{
								fill: "#2197D8",
							}}
							d="M256.003,8.934c-15.638,0-30.252,8.759-42.594,23.85c-4.76,5.82-9.176,12.591-13.186,20.172 c-9.461-5.498-18.054-12.306-25.551-20.172C198.212,17.693,226.156,8.934,256.003,8.934z"
						/>
						<path
							style={{
								fill: "#E09B2D",
							}}
							d="M315.223,311.946c-22.595,0-42.801-4.039-59.448-9.236c-34.555-10.788-61.272-38.644-70.565-73.63 c-0.054-0.202-0.107-0.405-0.161-0.607c-1.666,1.238-3.273,2.583-4.82,4.023h-0.012l-0.012-0.012 c-17.221-16.054-42.07-19.161-62.242-9.307c0,0.001,0,0.001-0.001,0.002c9.521,20.961,23.693,39.357,41.184,53.909 c0.093,0.076,0.182,0.157,0.275,0.234c1.177,0.975,2.369,1.933,3.576,2.872c20.208,15.721,34.275,37.929,40.261,62.683 c0.583,2.416,1.095,4.856,1.523,7.307l0.012,0.06h24.397h78.011v-0.012c0.476-2.761,1.059-5.486,1.749-8.188 c2.654-10.509,6.784-20.529,12.222-29.776C319.341,312.053,317.353,311.946,315.223,311.946z"
						/>
						<polygon
							style={{
								fill: "#2BA5F7",
							}}
							points="316.663,447.499 307.154,503.076 205.519,503.076 195.999,447.499 225.085,447.499 256.003,447.499 286.946,447.499 315.997,447.499 "
						/>
						<polygon
							style={{
								fill: "#2197D8",
							}}
							points="225.169,447.499 195.999,447.499 205.547,503.076 243.507,503.076 243.35,447.499 "
						/>
						<path
							style={{
								fill: "#333333",
							}}
							d="M404.305,222.1c7.973-19.22,12.199-40.076,12.199-61.597c0-42.485-16.438-82.532-46.285-112.762 C340.398,17.538,300.623,0.59,258.216,0.015C215.144-0.572,174.385,15.88,143.48,46.33c-30.89,30.437-47.93,70.912-47.984,113.971 c-0.026,21.611,4.193,42.53,12.182,61.8c0.721,1.739,79.089,226.018,79.089,226.018c0.02,0.295,9.615,56.461,9.615,56.461 c0.734,4.286,4.45,7.419,8.798,7.419h101.636c4.349,0,8.064-3.134,8.798-7.419c0,0,9.595-56.164,9.615-56.458 C325.231,448.122,403.617,223.759,404.305,222.1z M264.926,438.572v-79.408h31.332l-16.567,79.408H264.926z M232.342,438.572 l-16.566-79.408h31.299v79.408H232.342z M138.94,79.222c32.036,30.28,74.884,47.47,119.158,47.47 c43.691,0,84.738-15.977,116.72-45.189c13.839,20.729,21.955,44.692,23.537,69.884H113.646 C115.299,125.273,124.034,100.496,138.94,79.222z M398.383,169.239c-0.885,14.719-3.998,29.002-9.147,42.441 c-19.405-6.13-40.903-2.693-57.431,9.272c-22.48-16.338-53.312-16.339-75.794-0.006c-22.482-16.333-53.313-16.332-75.794,0.005 c-16.541-11.976-38.055-15.413-57.462-9.27c-5.145-13.434-8.255-27.714-9.138-42.443H398.383z M172.111,237.278l10.099,48.407 c-4.233-4.499-8.808-8.704-13.735-12.539c-16.022-12.466-28.905-27.821-38.183-45.047 C144.722,224.279,160.45,227.602,172.111,237.278z M190.056,235.885c16.829-12.694,40.438-12.457,57.018,0.701v104.727h-35.003 c-0.031-0.132-0.07-0.262-0.102-0.395L190.056,235.885z M299.936,341.313h-35.01v-104.71c16.586-13.177,40.214-13.415,57.05-0.709 l-21.813,104.554C300.091,340.737,300.005,341.022,299.936,341.313z M339.931,237.236c11.644-9.647,27.36-12.973,41.777-9.166 c-9.154,17.005-21.816,32.192-37.532,44.568c-5.182,4.08-9.98,8.532-14.401,13.279L339.931,237.236z M257.974,17.866 c23.912,0.324,46.879,6.515,67.247,17.848c-18.902,15.473-42.34,23.894-67.123,23.894c-25.537,0-49.538-8.865-68.693-25.167 C210.302,23.292,233.722,17.532,257.974,17.866z M173.596,44.255c23.021,21.464,52.742,33.204,84.501,33.204 c30.884,0,59.988-11.186,82.768-31.64c5.859,4.353,11.429,9.176,16.65,14.465c2.234,2.262,4.375,4.591,6.438,6.973 c-28.853,26.876-66.14,41.585-105.855,41.585c-40.846,0-78.892-15.427-107.996-43.612c1.903-2.106,3.867-4.171,5.908-6.181 C161.534,53.603,167.418,48.671,173.596,44.255z M202.347,438.572l-55.95-160.815c3.541,3.3,7.244,6.467,11.116,9.479 c18.636,14.5,31.652,34.977,37.155,58.159l19.439,93.177H202.347z M299.29,494.148h-86.581l-6.457-37.725h99.496L299.29,494.148z M297.926,438.572l19.575-93.822c5.611-22.765,18.806-43.195,37.719-58.087c3.608-2.841,7.072-5.815,10.391-8.909l-55.959,160.817 H297.926z"
						/>
					</g>
				</motion.svg>
			</div>

			<div className="absolute right-0 pr-5 md:pr-40 ">
				<motion.svg initial={{ y: 400 }} animate={{ y: 0 }} transition={{ duration: 45 }} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" width="64px" height="64px" fill="#000000">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<path
							style={{
								fill: "#D81B60",
							}}
							d="M308.053,387.413c-3.84-2.816-8.875-5.205-14.677-6.997 c30.037-53.675,101.547-188.501,65.365-287.403c-10.923-29.867-30.72-54.101-59.221-72.448 c57.6,9.728,102.144,39.339,120.747,82.261C451.243,174.08,411.307,274.944,308.053,387.413z"
						/>
						<path d="M435.883,96C410.112,36.693,341.675,0,256.939,0h-1.877C170.411,0,101.888,36.693,76.117,96 c-34.475,79.189,8.448,188.843,120.747,309.077c0.512,1.877,1.365,3.584,2.56,5.205l18.005,41.984h-4.096 c-4.693,0-8.533,3.84-8.533,8.533s3.84,8.533,8.533,8.533v34.133c0,4.693,3.84,8.533,8.533,8.533h68.267 c4.693,0,8.533-3.84,8.533-8.533v-34.133c4.693,0,8.533-3.84,8.533-8.533s-3.84-8.533-8.533-8.533h-4.096l18.005-41.984 c1.195-1.621,2.048-3.328,2.56-5.205C427.435,284.843,470.357,175.189,435.883,96z M264.533,21.163 c39.339,17.323,65.621,43.349,78.165,77.739c34.645,94.549-39.509,229.461-66.816,277.845c-3.669-0.512-7.509-0.853-11.349-1.024 L264.533,21.163L264.533,21.163z M91.733,102.827c18.603-42.923,63.147-72.533,120.747-82.261 c-28.501,18.347-48.299,42.581-59.221,72.448c-36.181,98.901,35.328,233.728,65.365,287.403c-5.803,1.792-10.837,4.181-14.677,6.997 C100.693,274.944,60.757,174.08,91.733,102.827z M247.467,21.163v354.304h-12.117c-27.819-49.493-100.352-182.784-66.048-276.565 C181.845,64.512,208.128,38.485,247.467,21.163z M281.6,494.933h-51.2v-25.6h51.2V494.933z M275.968,452.267h-39.936l-12.544-29.184 c9.813,2.389,21.163,3.584,32.512,3.584c11.349,0,22.699-1.195,32.512-3.584L275.968,452.267z M256,409.6 c-23.552,0-37.888-5.376-41.899-8.533c4.011-3.157,18.347-8.533,41.899-8.533c23.552,0,37.888,5.376,41.899,8.533 C293.888,404.224,279.552,409.6,256,409.6z M308.053,387.413c-3.84-2.816-8.875-5.205-14.677-6.997 c30.037-53.675,101.547-188.501,65.365-287.403c-10.923-29.867-30.72-54.101-59.221-72.448 c57.6,9.728,102.144,39.339,120.747,82.261C451.243,174.08,411.307,274.944,308.053,387.413z" />
						<path
							style={{
								fill: "#FFFFFF",
							}}
							d="M288.512,423.083l-12.544,29.184h-39.936l-12.544-29.184c9.813,2.389,21.163,3.584,32.512,3.584 C267.349,426.667,278.699,425.472,288.512,423.083z"
						/>
						<path
							style={{
								fill: "#FFC107",
							}}
							d="M297.899,401.067c-4.011,3.157-18.347,8.533-41.899,8.533c-23.552,0-37.888-5.376-41.899-8.533 c4.011-3.157,18.347-8.533,41.899-8.533C279.552,392.533,293.888,397.909,297.899,401.067z"
						/>
						<path
							style={{
								fill: "#5E35B1",
							}}
							d="M275.883,376.747c-3.669-0.512-7.509-0.853-11.349-1.024V21.163 c39.339,17.323,65.621,43.349,78.165,77.739C377.344,193.451,303.189,328.363,275.883,376.747z"
						/>
						<path
							style={{
								fill: "#D81B60",
							}}
							d="M247.467,21.163v354.304h-12.117c-27.819-49.493-100.352-182.784-66.048-276.565 C181.845,64.512,208.128,38.485,247.467,21.163z"
						/>
						<path
							style={{
								fill: "#5E35B1",
							}}
							d="M218.624,380.416c-5.803,1.792-10.837,4.181-14.677,6.997 C100.693,274.944,60.757,174.08,91.733,102.827c18.603-42.923,63.147-72.533,120.747-82.261 c-28.501,18.347-48.299,42.581-59.221,72.448C117.077,191.915,188.587,326.741,218.624,380.416z"
						/>
						<rect
							x={230.4}
							y={469.333}
							style={{
								fill: "#8D6E63",
							}}
							width={42.667}
							height={17.067}
						/>
						<polygon
							style={{
								fill: "#6D4C41",
							}}
							points="273.067,469.333 273.067,486.4 230.4,486.4 230.4,494.933 281.6,494.933 281.6,469.333 "
						/>
						<path
							style={{
								fill: "#AD1457",
							}}
							d="M420.267,102.827C401.664,59.904,357.12,30.293,299.52,20.565c3.934,2.534,7.663,5.205,11.264,7.953 c41.839,13.875,73.617,39.774,88.585,74.308c30.327,69.769-7.492,167.953-105.993,277.589c5.803,1.792,10.837,4.181,14.677,6.997 C411.307,274.944,451.243,174.08,420.267,102.827z"
						/>
					</g>
				</motion.svg>
			</div>

			<div className="w-fit mx-auto">
				<motion.svg initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 20 }} height="300px" width="300px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<g>
							<path
								style={{
									fill: "#B69362",
								}}
								d="M222.609,475.826c-4.61,0-8.348-3.736-8.348-8.348v-66.783c0-4.611,3.738-8.348,8.348-8.348 c4.61,0,8.348,3.736,8.348,8.348v66.783C230.957,472.09,227.22,475.826,222.609,475.826z"
							/>
							<path
								style={{
									fill: "#B69362",
								}}
								d="M289.391,475.826c-4.61,0-8.348-3.736-8.348-8.348v-66.783c0-4.611,3.738-8.348,8.348-8.348 s8.348,3.736,8.348,8.348v66.783C297.739,472.09,294.003,475.826,289.391,475.826z"
							/>
						</g>
						<path
							style={{
								fill: "#978574",
							}}
							d="M211.478,467.478v35.617c0,4.917,3.987,8.904,8.904,8.904h71.235c4.917,0,8.904-3.987,8.904-8.904 v-35.617H211.478z"
						/>
						<path
							style={{
								fill: "#B0A18D",
							}}
							d="M211.478,503.096c0,0.188,0.017,0.372,0.028,0.557h55.624c4.917,0,8.904-3.987,8.904-8.904v-6.678 h-64.557V503.096z"
						/>
						<path
							style={{
								fill: "#827061",
							}}
							d="M306.087,475.826H205.913c-4.61,0-8.348-3.736-8.348-8.348s3.738-8.348,8.348-8.348h100.174 c4.61,0,8.348,3.736,8.348,8.348S310.697,475.826,306.087,475.826z"
						/>
						<path
							style={{
								fill: "#ECCE93",
							}}
							d="M256.247,0c-0.082,0-0.165,0.003-0.247,0.003l-55.652,166.953L256,411.826h33.391 c6.147,0,11.13-4.983,11.13-11.13c0-49.716,66.028-74.447,96.439-113.778c23.27-30.097,37.127-67.842,37.127-108.829 C434.088,79.806,354.53,0.134,256.247,0z"
						/>
						<path
							style={{
								fill: "#AB5034",
							}}
							d="M256.217,0c-0.072,0-0.145,0.003-0.217,0.003l-55.652,166.953L256,411.826h29.217 c5.379,0,9.739-4.983,9.739-11.13c0-49.716,57.774-74.447,84.384-113.778c20.361-30.097,32.485-67.842,32.485-108.829 C411.827,79.806,342.213,0.134,256.217,0z"
						/>
						<path
							style={{
								fill: "#ECCE93",
							}}
							d="M256.124,0.002c-0.041,0-0.082,0.002-0.124,0.002l-55.652,166.952L256,411.826h11.13 c6.147,0,11.13-4.983,11.13-11.13c2.056-49.716,40.467-74.447,63.015-113.778c17.253-30.097,28.347-67.843,30.041-108.831 C375.386,79.709,323.808-0.035,256.124,0.002z"
						/>
						<g>
							<path
								style={{
									fill: "#AB5034",
								}}
								d="M256.124,0.002c-0.041,0-0.082,0.003-0.124,0.003l-55.652,166.951L256,411.826h0.051h1.794 c3.564,0,6.452-4.984,6.452-11.13c1.192-49.716,28.115-74.447,41.186-113.778c10.002-30.097,16.432-67.843,17.415-108.831 C325.258,79.709,295.358-0.035,256.124,0.002z"
							/>
							<path
								style={{
									fill: "#AB5034",
								}}
								d="M77.913,178.087c0,40.988,13.855,78.734,37.127,108.831c30.411,39.331,96.439,64.061,96.439,113.778 c0,6.147,4.983,11.13,11.13,11.13H256V0.003C157.646,0.003,77.913,79.733,77.913,178.087z"
							/>
						</g>
						<path
							style={{
								fill: "#ECCE93",
							}}
							d="M100.174,178.087c0,40.988,12.123,78.734,32.485,108.831c26.611,39.331,84.384,64.061,84.384,113.778 c0,6.147,4.36,11.13,9.739,11.13H256V0.003C169.939,0.003,100.174,79.733,100.174,178.087z"
						/>
						<path
							style={{
								fill: "#AB5034",
							}}
							d="M140.93,178.087c1.695,40.988,12.788,78.734,30.042,108.831 c22.547,39.331,60.711,64.061,62.767,113.778c0,6.147,4.983,11.13,11.13,11.13H256V0.004 C188.377,0.066,136.864,79.77,140.93,178.087z"
						/>
						<path
							style={{
								fill: "#ECCE93",
							}}
							d="M189.348,178.087c0.983,40.988,7.413,78.734,17.415,108.831 c13.07,39.331,39.994,64.061,41.186,113.778c0,6.146,2.888,11.13,6.452,11.13H256V0.006 C216.825,0.137,186.991,79.813,189.348,178.087z"
						/>
						<path
							style={{
								fill: "#BD7155",
							}}
							d="M77.913,178.087c0,17.552,2.548,34.505,7.28,50.522c27.381,36.88,71.257,60.782,120.72,60.782 c17.564,0,34.42-3.024,50.087-8.562V0.003C157.646,0.003,77.913,79.733,77.913,178.087z"
						/>
						<path
							style={{
								fill: "#F8E5B5",
							}}
							d="M100.174,178.087c0,29.97,6.488,58.202,17.933,82.983c24.7,17.816,55.023,28.321,87.806,28.321 c17.564,0,34.42-3.024,50.087-8.562V0.003C169.939,0.003,100.174,79.733,100.174,178.087z"
						/>
						<path
							style={{
								fill: "#BD7155",
							}}
							d="M140.93,178.087c1.661,40.151,12.355,77.172,29.009,106.959c11.527,2.833,23.573,4.345,35.974,4.345 c17.564,0,34.42-3.024,50.087-8.562V0.004C188.377,0.066,136.864,79.77,140.93,178.087z"
						/>
						<path
							style={{
								fill: "#F8E5B5",
							}}
							d="M227.812,287.797c72.605-10.603,128.362-73.119,128.362-148.667 c0-62.561-38.235-116.183-92.61-138.794c-2.458-0.214-4.936-0.335-7.441-0.334c-0.041,0-0.082,0.002-0.124,0.002l-55.652,166.952 L227.812,287.797z"
						/>
						<path
							style={{
								fill: "#BD7155",
							}}
							d="M256.124,0.002c-0.041,0-0.082,0.003-0.124,0.003l-55.652,166.951l27.464,120.841 c35.109-5.127,66.277-22.388,89.107-47.398c3.357-19.398,5.455-40.383,5.98-62.313C325.258,79.709,295.358-0.035,256.124,0.002z"
						/>
						<path
							style={{
								fill: "#F8E5B5",
							}}
							d="M189.348,178.087c0.983,40.988,7.413,78.734,17.415,108.831c0.275,0.827,0.564,1.638,0.85,2.452 c16.952-0.188,33.227-3.181,48.387-8.54V0.006C216.825,0.137,186.991,79.813,189.348,178.087z"
						/>
						<path
							style={{
								opacity: 0.3,
								fill: "#8D472E",
								enableBackground: "new",
							}}
							d="M324.568,342.486c-9.83,4.105-20.107,7.348-30.738,9.648 c-6.621,1.432-13.377,2.503-20.25,3.177c-5.785,0.567-11.648,0.864-17.581,0.864c-4.289,0-8.539-0.161-12.752-0.46l0,0 c-1.529-0.108-3.054-0.235-4.572-0.382c-6.928-0.669-13.738-1.739-20.411-3.178c-10.664-2.301-20.973-5.552-30.832-9.669 c-9.256-3.866-18.115-8.489-26.502-13.795c26.034,20.695,50.548,41.711,50.548,72.005c0,6.147,4.983,11.13,11.13,11.13h4.174h18.087 h9.531H256h0.051h1.794h9.285h18.087h4.174c6.147,0,11.13-4.983,11.13-11.13c0-30.294,24.514-51.31,50.548-72.005 C342.683,333.995,333.824,338.62,324.568,342.486z"
						/>
					</g>
				</motion.svg>
			</div>
		</motion.section>
	);
};
