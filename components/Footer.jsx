/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { toast } from 'react-toastify';

import { socials } from '@/data';
import { IoCopyOutline } from 'react-icons/io5';
import MagicButton from './ui/MagicButton';

const handleCopy = () => {
	const text = 'luigimarkfernandez@gmail.com';
	navigator.clipboard.writeText(text);
	toast.info('Emai Copied!');
};

const Footer = () => {
	return (
		<footer className="h-96 w-screen bg-cover bg-top relative flex justify-center items-center">
			<div className="pt-20 pb-10 z-10">
				<div className="flex flex-col items-center">
					<h1 className="heading lg:max-w-[45vw] my-4">Like what you see?</h1>
					<MagicButton
						title="Copy my email address"
						icon={<IoCopyOutline />}
						position="left"
						handleClick={handleCopy}
						otherClasses="!bg-[#161A31]"
					/>
					<p className="text-white-200 md:mt-10 my-4 text-center">
						Please feel free to contact me, my inbox is always open
					</p>
				</div>
				<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
					<div className="flex items-center md:gap-3 gap-6">
						{socials.map((info) => (
							<div
								key={info.id}
								className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
							>
								<img
									className="fill-white"
									src={info.img}
									alt="icons"
									width={40}
									height={40}
									onClick={() => window.open(info.link, '_blank')}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="absolute top-0 left-0 h-full w-full opacity-100 object-cover z-0">
				<img src="/footer-grid.svg" alt="grid" className="w-full h-full" />
			</div>
		</footer>
	);
};

export default Footer;
