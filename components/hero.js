import Image from 'next/image';

const Hero = () => {
	return (
		<section className='relative container flex flex-col-reverse lg:flex-row gap-12 mt-14 lg:mt-28 w-full'>
			{/* Content */}
			<div className='flex flex-1 flex-col items-center lg:items-start'>
				<h2 className='text-template-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>
					Teman Ngobrol Digital
				</h2>
				<p className='text-template-grey text-lg text-center lg:text-left mb-6 capitalize'>
					Kami bawakan teknologi terbaik kedalam bisnis anda
				</p>
				<div className='flex justify-center flex-wrap gap-6'>
					<a
						href='https://myportofolio-vert.vercel.app/'
						target='_blank'
						rel='noopener noreferrer'
						className="bg-blue-500 px-6 py-2 rounded text-white"
					>
					PORTOFOLIO
					</a>
				</div>
			</div>
			{/* Image */}
			<div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
				<img
					src='./img/hero-bg.png'
					alt=''
					className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full'
				/>
			</div>
			{/* Rounded Rectangle */}
			
		</section>
	);
};

export default Hero;
