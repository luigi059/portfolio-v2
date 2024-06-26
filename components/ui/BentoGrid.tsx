/* eslint-disable @next/next/no-img-element */
import { cn } from '@/utils/cn';
import { useState } from 'react';
import GridGlobe from './GridGlobe';

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	//   remove unecessary things here
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const leftLists = ['Express', 'Angular', 'Typescript'];
	const rightLists = ['React', 'Javascript', 'SQL'];

	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const text = 'hsu@jsmastery.pro';
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<div
			className={cn(
				'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col ',
				className
			)}
			style={{
				background: 'rgb(20,66,114)',
				backgroundColor:
					'linear-gradient(55deg, rgba(44,116,179,1) 0%, rgba(255,0,0,1) 100%)',
			}}
		>
			<div className="h-full">
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, 'object-cover object-center ')}
						/>
					)}
				</div>
				<div className="absolute right-0 -bottom-5">
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>

				<div
					className={cn(
						titleClassName,
						'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
					)}
				>
					<div
						className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
					>
						{title}
					</div>

					<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
						{description}
					</div>

					{id === 2 && <GridGlobe />}

					{/* Tech stack list div */}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							{/* tech stack lists */}
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								{leftLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-blue-200"
									>
										{item}
									</span>
								))}
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-blue-200"></span>
							</div>
							<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-blue-200"></span>
								{rightLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-blue-200"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
