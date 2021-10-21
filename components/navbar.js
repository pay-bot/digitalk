import { MenuIcon } from '@heroicons/react/outline';
const Navbar = () => {
	return (
		<nav className='container flex items-center py-4 mt-4 sm:mt-8'>
			<div className='py-1 w-32'>
				<p className="text-blue-600 text-3xl font-semibold" >DIGI<span className="text-black">TALK</span></p>
			</div>
			<ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-landing-blue uppercase text-xs'>
				<li className='cursor-pointer'>Features</li>
				<li className='cursor-pointer'>Pricing</li>
				<li className='cursor-pointer'>Contact</li>
				<a href="https://wa.me/08984629140" className="bg-green-300 px-8 py-2 rounded-xl">Hubungi</a>
			</ul>
			<div className='flex sm:hidden flex-1 justify-end'>
				<MenuIcon className='h-8 w-8' />
			</div>
		</nav>
	);
};

export default Navbar;
