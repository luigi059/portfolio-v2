import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="relative bg-blue-300 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<div>
					<Hero />
					<div className="absolute top-0 left-0 h-full w-full opacity-10  object-cover">
						<video autoPlay muted loop>
							<source src="/videos/Waves.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		</main>
	);
}
