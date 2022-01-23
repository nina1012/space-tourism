import { SizeContext } from '../context/SizeContext';
import { useContext, useEffect, useState } from 'react';
import DATA from '../../data';

const TechnologyItem = () => {
	const [activeButton, setActiveButton] = useState(0);
	const size = useContext(SizeContext);
	const [technology, setTechnology] = useState(DATA.technology[activeButton]);

	useEffect(() => {
		setTechnology(DATA.technology[activeButton]);
	}, [activeButton]);
	return (
		<div className='lg:flex'>
			<div
				className='w-full h-[170px] bg-cover  bg-center bg-no-repeat my-8 md:h-[310px] lg:w-[515px] lg:h-[527px] lg:order-1 lg:-mr-5 '
				style={{
					backgroundImage: `url(${
						size[0] < 1100
							? technology.images.landscape
							: technology.images.portrait
					})`,
				}}
			></div>

			<div className='lg:flex lg:mr-auto lg:mt-36'>
				<div className='buttons flex w-40 mx-auto md:w-52 md:mb-12 lg:flex-col'>
					{[1, 2, 3].map((button, index) => (
						<div
							className='button heading4 w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 lg:mb-6'
							key={button}
							onClick={() => setActiveButton(index)}
						>
							{button}
						</div>
					))}
				</div>

				<div className='mt-6 text-center'>
					<p className='subheading2'>THE TERMINOLOGY…</p>
					<h3 className='heading3 mt-2 mb-4 md:my-4 lg:text-left'>
						{technology.name}
					</h3>
					<p className='text mx-auto'>{technology.description}</p>
				</div>
			</div>
		</div>
	);
};

export default TechnologyItem;
