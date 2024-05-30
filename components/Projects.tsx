/* eslint-disable @next/next/no-img-element */
'use client';

import { FaLocationArrow } from 'react-icons/fa6';

import { projects } from '@/data';
import { PinContainer } from './ui/PinContainer';

const Projects = () => {
	return (
		<div className="mb-40">
			<div>
				<h1 className="heading mb-8">Recent Projects</h1>
				<h2 className="tracking-widest text-xs text-center text-white">
					Please be patient with the long website startup time as the host shuts
					down server instances with inactivity, which can delay requests by 50
					seconds or more.
				</h2>
			</div>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((item) => (
					<div
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
						key={item.id}
					>
						<div className="p-4  flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1]  bg-blue-100">
							<div className="">
								<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
									<img
										src={item.img}
										alt="cover"
										className="w-full h-full rounded-lg"
									/>
								</div>

								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{item.title}
								</h1>

								<p
									className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
									style={{
										margin: '1vh 0',
									}}
								>
									{item.des}
								</p>

								<div className="flex items-center justify-between mt-7 mb-3">
									<div className="flex items-center">
										{item.iconLists.map((icon, index) => (
											<div
												key={index}
												className="border border-white/[.2] rounded-full bg-blue-300 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
												style={{
													transform: `translateX(-${5 * index + 2}px)`,
												}}
											>
												<img src={icon} alt="icons" className="p-2" />
											</div>
										))}
									</div>

									<a
										className="flex justify-center items-center cursor-pointer"
										href={item.link}
										target="_blank"
									>
										<p className="flex lg:text-xl md:text-xs text-sm text-blue-300">
											Check Live Site
										</p>
										<FaLocationArrow className="ms-3" color="#2C74B3" />
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
