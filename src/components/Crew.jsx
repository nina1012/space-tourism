import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import DATA from '../../data';
import Member from './Member';

const Crew = () => {
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
		</div>
	);
};

export default Crew;
