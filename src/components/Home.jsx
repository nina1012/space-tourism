import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div className='home pt-28 md:pt-52 lg:flex lg:items-end lg:px-40 lg:pt-96'>
			<div className='lg:mr-auto'>
				<h5 className='heading5'>SO, YOU WANT TO TRAVEL TO</h5>
				<h1 className='heading1 py-3 md:py-5'>Space</h1>
				<p className='text mx-auto'>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className='mt-20 md:mt-36 lg:mt-0'>
				<Link to='/destination' className='button heading4'>
					explore
				</Link>
			</div>
		</div>
	);
};

export default Home;
