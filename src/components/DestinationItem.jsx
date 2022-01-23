const DestionationItem = ({ planet }) => {
	return (
		<div className='lg:pb-28'>
			<h2 className='heading2 mt-3 text-center md:my-4 lg:text-left'>
				{planet.name}
			</h2>
			<p className='text mx-auto'>{planet.description}</p>
			<hr className='my-9 text-primaryDark opacity-50 md:w-[573px] md:mx-auto lg:w-[445px]' />
			<div className='flex flex-col text-center gap-8 items-center pb-14 text-secondaryLight md:flex-row md:justify-center lg:justify-start lg:gap-20 '>
				<div className='flex flex-col gap-3'>
					<p className='subheading2'>AVG. DISTANCE</p>
					<p className='subheading1'>{planet.distance}</p>
				</div>
				<div className='flex flex-col gap-3'>
					<p className='subheading2'>Est. travel time</p>
					<p className='subheading1'>{planet.travel}</p>
				</div>
			</div>
		</div>
	);
};

export default DestionationItem;
