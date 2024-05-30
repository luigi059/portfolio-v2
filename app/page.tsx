'use client';

import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<main className="bg-blue overflow-hidden">
			<div>
				<Hero />
				<div className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
					<Grid />
					<Projects />
				</div>
			</div>
		</main>
	);
}
