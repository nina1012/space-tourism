import { Link } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';
import { SizeContext } from '../context/SizeContext';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const Nav = () => {
	const [openNav, setOpenNav] = useState(true);
	const size = useContext(SizeContext);
	const ref = useRef();
	useOnClickOutside(ref, () => setOpenNav(true));

	return (
		<div
			className='absolute top-0 left-0 w-full flex lg:pt-4 z-50 md:items-center'
			style={{ height: '96px' }}
		>
			<Link to='/' className='pl-4 my-auto mr-auto md:pl-6 md:my-0 lg:mr-12'>
				<img
					src='./assets/shared/logo.svg'
					alt='Logo'
					style={{
						width: 'var(--logo-size)',
						height: 'var(--logo-size)',
					}}
				/>
			</Link>
			{size[0] > 1100 && (
				<hr
					className='max-w-full  mx-0 text-primaryDark opacity-50'
					style={{ width: '473px' }}
				/>
			)}

			<nav
				className={`absolute right-0 z-20 text-white ${
					size[0] < 768 && openNav ? 'backdrop-blur-none ' : 'backdrop-blur-3xl'
				}  min-h-screen  w-3/5 pt-24 min-w-[66%] md:px-12 md:pt-0 md:min-w-[50%] md:min-h-min md:text-right md:h-[96px]`}
				style={{
					width: 'var(--nav-width)',
					minHeight: `${size[0] < 768 && openNav ? '100vh' : '0'}`,
					pointerEvents: `${size[0] < 768 && openNav ? 'none' : 'auto'}`,
				}}
				ref={ref}
			>
				<ul
					className='w-full flex-col min-h-screen h-full md:flex md:flex-row md:justify-between md:min-h-full md:h-full'
					style={{
						display: `${size[0] < 768 && openNav ? 'none' : 'flex'}`,
					}}
				>
					{['home', 'destination', 'crew', 'technology'].map((link, index) => (
						<li className='nav-link nav-text flex' key={link}>
							<Link
								to={link === 'home' ? '/' : link}
								className='min-h-full h-full flex-nowrap text-center
								 '
							>
								<span className='text-bold text-white inline-block md:hidden text-center lg:inline-block'>
									0{index}
								</span>
								<span
									className='w-3'
									style={{
										display: `${
											size[0] > 768 && size[0] < 1440 ? 'none' : 'inline-block'
										}`,
									}}
								></span>
								{link}
							</Link>
						</li>
					))}
				</ul>
				<button>
					{size[0] < 768 ? (
						openNav ? (
							<img
								onClick={() => setOpenNav(false)}
								className='nav-button'
								src='./assets/shared/icon-hamburger.svg'
								style={{ width: '24px', height: '21px', pointerEvents: 'auto' }} // allows only hamburger icon to be clickable when screens are smaller than 768px
								alt='Hamburger icon'
							/>
						) : (
							<img
								onClick={() => setOpenNav(true)}
								className='nav-button'
								src='./assets/shared/icon-close.svg'
								style={{
									width: '19.09px',
									height: '19.09px',
								}}
								alt='Close icon'
							/>
						)
					) : null}
				</button>
			</nav>
		</div>
	);
};
export default Nav;
