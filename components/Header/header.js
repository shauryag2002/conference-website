import React from 'react';
import Heading from '../Typography/heading';
import Paragraph from '../Typography/paragraph';
import Button from '../Buttons/button';
import ReactSlider from '../Slider/slider';
import cities from '../../config/city-lists.json';
import Venue from '../Venue/venue';
import Announcement from '../announcement';
import Link from 'next/link';

function Header() {
	return (
		<div className='relative'>
			<div className='container w-full flex items-center justify-center'>
				<div className=''>
					<div className='flex justify-center w-full mt-32'>
						<div className='flex flex-col justify-center items-center w-full'>
						<div className='my-10'><Announcement /></div>
							<div className='sm:w-full text-center' data-cy='heading'>
								<Heading
									className='text-6xl sm:text-4xl leading-normal sm:leading-38px tracking-[-3px] sm:tracking-[-0.02em] font-extrabold text-gradient'
									level='h1'
									typeStyle='heading'
								>
									AsyncAPI Conf On Tour 2024
								</Heading>
							</div>
							<div className='w-[624px] sm:w-full text-center' data-cy='headPara'>
								<Paragraph className='mt-[16px]' textColor='text-gray-200'>
								Join us for the AsyncAPI Conference on Tour,
								bringing the latest in AsyncAPI technology to locations worldwide!
								</Paragraph>
							</div>
							<div className='mt-[54px] relative flex items-center justify-center' data-cy='register'>
								<Link
									href='#register'
									aria-label='Register now'
								>
									<Button label='Register now' className='w-[250px]'>Register now</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-24' data-cy='slider'>
				<ReactSlider>
					{cities.map((city) => {
						return <Venue key={city.name} city={city}/>;
					})}
				</ReactSlider>
			</div>
		</div>
	);
}

export default Header;
