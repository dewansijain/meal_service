import React from 'react'
import meal_1 from '../assets/meal_1.png'
import meal_2 from '../assets/meal_2.png'
import PricingPopUp from './PricingPopUp'

export default function MenuPricing() {
	const data = [
		{lunch :{option1:'3 Roti, Rice,Dal, Aaloo Beans, salad', option2:'Zeera Rice, Dum Aaloo, salad', option3:'Channa Masala, 8 Puri, Bundi Raita', option4:'3 Sattu Paratha, Aaloo Channa ki Sabzi, Aachar'}, dinner: {option1:'', option2:'', option3:'', option4:'3 Chapatti, Curry Pakoda, Aachar, Salad'}},
		{lunch :{option1:'3 Aaloo Paratha, Dahi, Achar, Ketchup', option2:'3 Roti, Dal, Aaloo Bhujia, Rice, Aachar', option3:'2 Missi Roti, 2 Plain Roti, Curry, Zeera Aaloo', option4:'2 Roti, Matar Pulao, Tadka Dal'}, dinner: {option1:'6 Puri, Matar Paneer, Aachar', option2:'Pav Bhaji', option3:'', option4:'3 Chapatti, Shahi Paneer, Aachar'}},
		{lunch :{option1:'Tava Pulao, Gatte ki sabzi, 2 Plain Roti, Pyaz', option2:'Chola Chawal, Salad, Aachar', option3:'3 Roti, Rice, Dal, Seasonal Sabzi', option4:'Chola, 8 Puri, Bundi Raita'}, dinner: {option1:'Channa Masala, Zeera Rice, Pyaz, Aachar', option2:'6 Puri, Channa, Kheer', option3:'', option4:'3 Chapatti, Channa Masala, Aachar'}},
		{lunch :{option1:'3 Veg Paratha, Bundi Raita, Ketchup', option2:'Rajma Chawal, Salad, Aachar', option3:'Vegetable Pulao with Dal Fry, Aachar, Salad', option4:'3 Roti, Dal, Mix Veg, Salad'}, dinner: {option1:'', option2:'', option3:'Chinese Frankie', option4:'3 Chapatti, Achari Aaloo, Salad'}},
		{lunch :{option1:'2 Roti, Matar Pulao, Tadka Dal', option2:'3 Roti, Dal, Aaloo matar, Aachar', option3:'3 Sattu Paratha, Chutney, Aachar', option4:'Dal, Baati, Aaloo ka chokha, Chutney'}, dinner: {option1:'Moong Dal ka Cheela, Chutney, Aachar', option2:'Idly, Sambhar, Chutney', option3:'Dal Makhni, Veg Pulao, Salad', option4:'3 Chapatti, Seasonal Sabzi, Aachar'}},
		{lunch :{option1:'3 Roti, Dal,Rice, Mix Veg, Aachar', option2:'Plain Rice, Dal Fry with Mix Veg', option3:'3 Aaloo Paratha, Dahi, Achar, Ketchup', option4:'Masala Khichdi, Aaloo ka chokha, Aachar'}, dinner: {option1:'Pav Bhaji', option2:'Masala Frankie', option3:'Litti Chokha, Chutney, Pyaz', option4:'3 Chapatti, Gravy Aaloo, Aachar'}},
		{lunch :{option1:'3 Roti, Rice, Dal, Seasonal Sabzi', option2:'3 Paneer Paratha, Hari Chutney, Aachar', option3:'3 Tandoori Roti, Paneer Butter Masala, Pyaz', option4:'Chhole Bhature, Pyaz'}, dinner: {option1:'Manchurian, Fried Rice', option2:'1 Veg Roll, Macroni', option3:'Manchurian, Chowmin', option4:'3 Chapatti, MixVeg, Salad'}},
	]
	const [assignData, setAssignData] = React.useState(data[0])
	const [popupVisible, setPopupVisible] = React.useState(false)
	const handleClick = (index) => {
		setAssignData(data[index])
		setPopupVisible(true)
	}

	return (
		<div className="px-5 py-10 lg:px-20 bg-red-700 flex flex-col lg:flex-row gap-10" id='menu'>
			{popupVisible && <PricingPopUp assignData={assignData} setPopupVisible={setPopupVisible} />}
			<div className='flex p-10 flex-1 bg-white rounded-lg flex-col justify-between items-center gap-8'>
				<h2 className='text-3xl font-bold text-red-700 text-center lg:text-left'>Choose your favourite meal everyday!</h2>
				<div className="flex flex-row flex-wrap gap-6 flex-1 justify-center items-center">
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center" onClick={() => handleClick(0)}>
						<h3 className="text-sm lg:text-xl font-bold text-white">Monday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center" onClick={() => handleClick(1)}>
						<h3 className="text-sm lg:text-xl font-bold text-white">Tuesday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center" onClick={() => handleClick(2)}>
						<h3 className="text-sm lg:text-xl font-bold text-white">Wednesday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center" onClick={() => handleClick(3)}>
						<h3 className="text-sm lg:text-xl font-bold text-white">Thursday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center" onClick={() => handleClick(4)}>
						<h3 className="text-sm lg:text-xl font-bold text-white">Friday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center" onClick={() => handleClick(5)}>
						<h3 className="text-sm lg:text-xl font-bold text-white">Saturday</h3>
					</div>
					<div className="flex flex-col w-5/12 p-3 bg-red-700 rounded-lg items-center justify-center" onClick={() => handleClick(6)}>
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
