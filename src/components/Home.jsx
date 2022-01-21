import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div className=' mx-auto home centering flex-col text-center pt-28 text-secondaryLight'>
			<div className=''>
				<h4 className='uppercase  font-barlowCondensed tracking-subheading2LetterSpace'>
					So, you want to travel to
				</h4>
				<h1 className='text-7xl text-white uppercase font-bellefair my-4'>
					Space
				</h1>
				<p className='font-barlowCondensed text-base mx-auto leading-6 w-5/6'>
					Let's face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we'll give you a truly out of this world
					experience!
				</p>
			</div>
			<div>
				<div className='pt-10'>
					<Link
						to='/destination'
						className='button'
						style={{
							width: 'var(--button-size)',
							height: 'var(--button-size)',
						}}
					>
						explore
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
