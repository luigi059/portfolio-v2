import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div
				className="h-[50rem] w-full dark:bg-blue-200 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
      flex items-center justify-center absolute top-0 left-0"
			>
				{/* Radial gradient for the container to give a faded look */}
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-blue-200 bg-white
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="flex justify-center relative my-20 z-20">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
						words="Luigi Mark Fernandez"
					/>
					<h2 className="uppercase tracking-widest text-xs text-center text-white max-w-80 mb-8 animate-moveInRight">
						Full Stack Developer
					</h2>
					<a className="animate-moveInBottom" href="#projects">
						<MagicButton
							title="See Projects"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;