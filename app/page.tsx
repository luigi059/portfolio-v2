'use client';

import Grid from '@/components/Grid';
import Hero from '@/components/Hero';

export default function Home() {
	return (
		<main className="bg-blue overflow-hidden">
			<div>
				<Hero />
				<div className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 my-40">
					<Grid />
				</div>
			</div>
		</main>
	);
}
