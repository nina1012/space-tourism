import { useState } from 'react';
import DestionationItem from './DestinationItem';
import DATA from '../../data';

const Destination = () => {
	const [item, setItem] = useState('Moon');

	return (
		<div className='destination pt-[88px] md:pt-36 lg:pt-52 '>
			<h5 className='text-center heading5 md:text-left lg:pl-40'>
				<span className='opacity-20 mr-4 inline-block '>01</span>pick your
				destination
			</h5>
			<div className='flex flex-col justify-center lg:flex-row lg:mt-16'>
				<img
					src={`./assets/destination/image-${item}.png`}
					className='w-[170px] h-[170px] my-8 mx-auto md:w-[300px] md:h-[300px] md:my-16 lg:w-[445px] lg:h-[445px]'
					alt={item}
				/>
				<div className='lg:mr-40 '>
					<nav className='text-white w-[300px] mx-auto lg:mx-0 lg:w-[330px]'>
						<ul className='flex justify-around mx-auto lg:justify-start'>
							{['Moon', 'Mars', 'Europa', 'Titan'].map((planet) => (
								<li
									className='nav-link nav-text inline-block h-full pl-0 pr-0 pb-3 border-b-2 border-b-transparent border-r-0 hover:border-b-2 hover:border-b-white hover:border-r-0 lg:mr-4 lg:text-center'
									onClick={() => setItem(planet)}
									key={planet}
								>
									{planet}
								</li>
							))}
						</ul>
					</nav>
					{DATA.destinations.map((planet) => {
						return planet.name === item ? (
							<DestionationItem key={planet.name} planet={planet} />
						) : null;
					})}
				</div>
			</div>
		</div>
	);
};

export default Destination;