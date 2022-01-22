import { useState, useContext } from 'react';
import { SizeContext } from '../context/SizeContext';
const Technology = () => {
	const [activeTechnology, setActiveTechnology] = useState(1);
	const size = useContext(SizeContext);

	return (
		<div className='technology pt-[88px] md:pt-36 lg:pt-52 '>
			<h5 className='text-center heading5 md:text-left md:pl-8 lg:pl-40'>
				<span className='opacity-20 mr-4 inline-block '>02</span>space launch
				101
			</h5>
			<div className='lg:flex '>
				<div
					className='w-full h-[170px] bg-cover  bg-center bg-no-repeat my-8 md:h-[310px] lg:w-[515px] lg:h-[527px] lg:order-1 lg:-mr-5 '
					style={{
						backgroundImage: `url(./assets/technology/image-launch-vehicle-${
							size[0] < 1100 ? 'landscape' : 'portrait'
						}.jpg)`,
					}}
				></div>

				<div className='lg:flex lg:mr-auto lg:mt-36'>
					<div className='buttons flex w-40 mx-auto md:w-52 md:mb-12 lg:flex-col'>
						{[1, 2, 3].map((button) => (
							<div
								className='button heading4 w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 lg:mb-6'
								key={button}
							>
								{button}
							</div>
						))}
					</div>
					<div className='mt-6 text-center'>
						<p className='subheading2'>THE TERMINOLOGY…</p>
						<h3 className='heading3 mt-2 mb-4 md:my-4'>LAUNCH VEHICLE</h3>
						<p className='text mx-auto'>
							A launch vehicle or carrier rocket is a rocket-propelled vehicle
							used to carry a payload from Earth's surface to space, usually to
							Earth orbit or beyond. Our WEB-X carrier rocket is the most
							powerful in operation. Standing 150 metres tall, it's quite an
							awe-inspiring sight on the launch pad!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;
