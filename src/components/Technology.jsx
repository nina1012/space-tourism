import TechnologyItem from './TechnologyItem';
import { useState } from 'react';
import DATA from '../../data';

const Technology = () => {
	// const [active, setActive] = useState(1);
	// console.log(DATA.technology[active]);
	return (
		<>
			<div className='technology pt-[88px] md:pt-36 lg:pt-52 '>
				<h5 className='text-center heading5 md:text-left md:pl-8 lg:pl-40'>
					<span className='opacity-20 mr-4 inline-block '>02</span>space launch
					101
				</h5>
			</div>
			{/* {DATA.technology[active]} */}
			<TechnologyItem />
		</>
	);
};

export default Technology;
