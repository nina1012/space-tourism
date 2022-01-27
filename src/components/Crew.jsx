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

			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				spaceBetween={100}
				slidesPerView={1}
				loop={true}
				className='mySwiper'
			>
				{DATA.crew.map((crew, i) => {
					return (
						<SwiperSlide key={i}>
							<Member crew={crew} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			{/* <div className='swiper-pagination swiper-pagination-clickable  swiper-pagination-horizontal relative my-8 block z-0 top-[310px]'>
				{[0, 1, 2, 3].map((ind) => (
					<div key={ind} className='indicator '></div>
				))}
			</div> */}
		</div>
	);
};

export default Crew;
