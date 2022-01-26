import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
// SwiperCore.use([Pagination]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import DATA from '../../data';
import Member from './Member';
import { useState } from 'react';

const Crew = () => {
	const [activeMember, setActiceMember] = useState(0);
	return (
		<div className='relative crew pt-[88px] md:pt-36 lg:pt-52'>
			<h5 className='text-center heading5 md:text-left'>
				<span className='opacity-20 mr-4 inline-block '>02</span>meet your crew
			</h5>
			{/* <div className='order-1'> */}

			{/* </div> */}

			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				className='mySwiper'
			>
				{DATA.crew.map((crew, i) => {
					return (
						<SwiperSlide key={i}>
							<Member crew={crew} />
						</SwiperSlide>
					);
				})}
				<div className='swiper-indicators flex justify-between w-24 mx-auto '>
					{[0, 1, 2, 3].map((indicator) => (
						<div
							key={indicator}
							onClick={(e) => setActiceMember(indicator)}
							className={`w-4 h-4 rounded-full transition-all bg-white hover:cursor-pointer	 ${
								activeMember === indicator ? ' opacity-100' : ' opacity-10'
							}`}
						></div>
					))}
				</div>
			</Swiper>
		</div>
	);
};

export default Crew;
