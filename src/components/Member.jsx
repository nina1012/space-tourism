const Member = ({ crew }) => {
	return (
		<div className='member flex flex-col  lg:flex-row lg:items-center'>
			<div className='mt-11 md:my-14 lg:pl-36'>
				<h4 className='heading4 opacity-50 text-center lg:text-left'>
					{crew.role}
				</h4>
				<h3 className='heading3 text-center md:mt-2 md:mb-4'>{crew.name}</h3>
				<p className='text mx-auto md:mb-10'>{crew.bio}</p>
			</div>
			<picture className='centering flex-col h-[223px] -order-1 my-8 md:my-8 md:order-1 md:h-[577px] md:mb-0 lg:h-full lg:min-h-[681px] lg:mx-auto justify-self-end'>
				<img src={crew.images.png} alt='Crew member photo' className='h-full' />
				<hr className='w-full opacity-10 md:hidden ' />
			</picture>
		</div>
	);
};

export default Member;
