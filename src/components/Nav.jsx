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
			className='absolute top-0 left-0 w-full flex lg:pt-4 z-50'
			style={{ height: '96px' }}
		>
			<Link to='/' className='pl-4 mr-auto pt-6 md:pl-6 lg:mr-12'>
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
					className='max-w-full my-auto mx-0 text-primaryDark opacity-50'
					style={{ width: '473px' }}
				/>
			)}

			<nav
				className={`absolute right-0 z-20 text-white ${
					size[0] < 768 && openNav ? 'backdrop-blur-none ' : 'backdrop-blur-3xl'
				}  min-h-screen w-3/5 pt-24 min-w-[66%] md:pt-0 md:min-w-[50%] md:min-h-min md:text-right`}
				style={{
					width: 'var(--nav-width)',
					minHeight: `${size[0] < 768 && openNav ? '100vh' : '0'}`,
				}}
				ref={ref}
			>
				<ul
					className='w-full min-h-screen h-full md:min-h-full md:pr-12 md:h-full'
					style={{ display: `${size[0] < 768 && openNav ? 'none' : 'block'}` }}
				>
					{['home', 'destination', 'crew', 'technology'].map((link, index) => (
						<li className='nav-link nav-text items-center' key={link}>
							<Link to={link === 'home' ? '/' : link}>
								<span className='text-bold text-white md:hidden lg:inline-block'>
									0{index}
								</span>
								<span className='w-3 inline-block'></span>
								{link}
							</Link>
						</li>
					))}
				</ul>
				<button className='float-right	'>
					{size[0] < 768 ? (
						openNav ? (
							<img
								onClick={() => setOpenNav(false)}
								className='nav-button'
								src='./assets/shared/icon-hamburger.svg'
								style={{ width: '24px', height: '21px' }}
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
				{/* {size[0] < 768 ? (
					!openNav ? (
						<img
							onClick={() => setOpenNav(true)}
							className='nav-button'
							src='./assets/shared/icon-hamburger.svg'
							style={{ width: '24px', height: '21px' }}
							alt='Hamburger icon'
						/>
					) : (
						<img
							onClick={() => setOpenNav(false)}
							className='nav-button'
							src='./assets/shared/icon-close.svg'
							style={{
								width: '19.09px',
								height: '19.09px',
							}}
							alt='Close icon'
						/>
					)
				) : null} */}
			</nav>
		</div>
	);
};
export default Nav;
