'use client';

import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
	return (
		<>
			<ToastContainer />
			<main className="bg-blue overflow-hidden">
				<div>
					<Hero />
					<div className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
						<Grid />
						<Projects />
						<Footer />
					</div>
				</div>
			</main>
		</>
	);
}
