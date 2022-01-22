const DestionationItem = ({ planet }) => {
	return (
		<div>
			<h2 className='heading2 mt-3 text-center md:my-4 lg:text-left'>
				{planet.name}
			</h2>
			<p className='text mx-auto'>{planet.description}</p>
			<hr className='my-8 text-primaryDark opacity-50' />
			<div className='flex flex-col text-center gap-8 items-center text-secondaryLight md:flex-row md:justify-center lg:justify-start lg:gap-20'>
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
