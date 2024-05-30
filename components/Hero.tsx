import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
	return (
		<div className="h-screen w-screen bg-cover bg-top relative flex justify-center items-center">
			<div
				className="h-full w-full bg-blue-100  bg-grid-white/[0.03]
      flex items-center justify-center absolute top-0 left-0"
			>
				{/* Radial gradient for the container to give a faded look */}
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-blue-100 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>
			<div className="absolute top-0 left-0 h-full w-full opacity-10 object-cover z-0 overflow-hidden">
				<video autoPlay muted loop>
					<source src="/videos/Waves.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="flex relative my-20">
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
