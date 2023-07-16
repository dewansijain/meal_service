import React from 'react'
import meal_1 from '../assets/meal_1.png'
import meal_2 from '../assets/meal_2.png'

export default function MenuPricing() {
	return (
		<div className="px-5 py-10 lg:px-20 bg-red-700 flex flex-col lg:flex-row gap-10" id='menu'>
			<div className='flex p-10 flex-1 bg-white rounded-lg flex-col justify-between items-center gap-8'>
				<h2 className='text-3xl font-bold text-red-700 text-center lg:text-left'>Choose your favourite meal everyday!</h2>
				<div className="flex flex-row flex-wrap gap-6 flex-1 justify-center items-center">
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center">
						<h3 className="text-sm lg:text-xl font-bold text-white">Monday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center">
						<h3 className="text-sm lg:text-xl font-bold text-white">Tuesday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center">
						<h3 className="text-sm lg:text-xl font-bold text-white">Wednesday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center">
						<h3 className="text-sm lg:text-xl font-bold text-white">Thursday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center">
						<h3 className="text-sm lg:text-xl font-bold text-white">Friday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center">
						<h3 className="text-sm lg:text-xl font-bold text-white">Saturday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center">
						<h3 className="text-sm lg:text-xl font-bold text-white">Sunday</h3>
					</div>
				</div>
			</div>
			<div className="flex flex-1 flex-col justify-between items-center gap-8">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-8 flex-1">
					<div className="flex flex-col gap-5 flex-1 bg-white p-5 rounded-lg justify-center items-center">
						<div className="flex flex-col gap-2">
							<img src={meal_1} alt="meal_1" className="w-full rounded-lg" />
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex w-full flex-col gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<h3 className="text-xl font-bold text-red-700">One Meal Plan</h3>
								<p className="text-lg">Only lunch or only dinner delivered to you</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>3 Days</p>
								</div>
								<p className='font-semibold'>₹195/-</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>7 Days</p>
									<p className='bg-red-200 text-red-700 px-1 rounded-md font-semibold'>5% Off</p>
								</div>
								<p className='font-semibold'>₹432/-</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>15 Days</p>
									<p className='bg-red-200 text-red-700 px-1 rounded-md font-semibold'>10% Off</p>
								</div>
								<p className='font-semibold'>₹823/-</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>1 Month</p>
									<p className='bg-red-200 text-red-700 px-1 rounded-md font-semibold'>25% Off</p>
								</div>
								<p className='font-semibold'>₹1463/-</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 flex-1 bg-white p-5 rounded-lg justify-center items-center">
						<div className="flex flex-col gap-2">
							<img src={meal_2} alt="meal_1" className="w-full rounded-lg" />
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex w-full flex-col gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<h3 className="text-xl font-bold text-red-700">One Meal Plan</h3>
								<p className="text-lg">Only lunch or only dinner delivered to you</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>3 Days</p>
								</div>
								<p className='font-semibold'>₹195/-</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>7 Days</p>
									<p className='bg-red-200 text-red-700 px-1 rounded-md font-semibold'>5% Off</p>
								</div>
								<p className='font-semibold'>₹432/-</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>15 Days</p>
									<p className='bg-red-200 text-red-700 px-1 rounded-md font-semibold'>10% Off</p>
								</div>
								<p className='font-semibold'>₹823/-</p>
							</div>
							<div className="flex w-full flex-row justify-between gap-2 border-dashed border-b-2 pb-2 border-red-700 items-center">
								<div className="flex flex-col gap-1">
									<p className='text-red-700 font-bold'>1 Month</p>
									<p className='bg-red-200 text-red-700 px-1 rounded-md font-semibold'>25% Off</p>
								</div>
								<p className='font-semibold'>₹1463/-</p>
							</div>
						</div>
					</div>
				</div>
				<button className="bg-white text-red-700 px-10 py-2 text-2xl rounded-full">Order Now</button>
			</div>
		</div>
	)
}
