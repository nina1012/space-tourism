import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { SizeContext } from '../context/SizeContext';

const Nav = () => {
	const [openNav, setOpenNav] = useState(true);
	const size = useContext(SizeContext);
	return (
		<div
			className='absolute top-0 left-0 w-full flex'
			style={{ height: '96px' }}
		>
			<Link to='/' className='mr-auto pt-6 pl-6 md:pl-9 '>
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
				<hr className='max-w-full my-auto mx-0' style={{ width: '473px' }} />
			)}

			<nav
				className='text-white backdrop-blur-3xl min-h-screen w-3/5 pt-24 min-w-[66%] md:pt-0 md:min-w-[50%] md:min-h-min md:text-right'
				style={{
					display: `${size[0] < 768 && openNav ? 'none' : 'block'}`,
					width: 'var(--nav-width)',
				}}
			>
				<ul className='w-full md:pr-12 md:h-full'>
					{['home', 'destination', 'crew', 'technology'].map((link, index) => (
						<li className='nav-link items-center' key={link}>
							<Link to={link === 'home' ? '/' : link}>
								<span className='text-bold text-white md:hidden'>0{index}</span>
								<span className='w-3 inline-block'></span>
								{link}
							</Link>
						</li>
					))}
				</ul>
			</nav>
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
		</div>
	);
};
export default Nav;
