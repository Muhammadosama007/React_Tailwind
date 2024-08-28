import React from 'react'
import AboutList from '../Lists/AboutList'
import ListImg from '../Lists/ListImg'
import CarBars from '../ChartBars/CarBars'
import CarPieChart from '../ChartBars/CarPieChart'
import Ratting from '../Ratting/Ratting'


function About() {
    return (
        <>
            <h1 className='text-center text-2xl font-bold'>AboutUs</h1>
            <div className='flex justify-center'><Ratting /></div>
            <h1>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
            <div className='ml-8 mb-4'>
                <h1 className='text-2xl font-semibold mt-4 mb-2'>Welcome to RentACar!</h1>
                <p>At RentACar, we believe that your journey should be as enjoyable as your destination. Established in 2024, we have been committed to providing our customers with a seamless, reliable, and affordable car rental experience. Whether you need a car for a business trip, a weekend getaway, or a road trip adventure, we’ve got you covered with our wide range of vehicles.</p>
            </div>
            <div className='flex'>
                <div className='ml-8 mb-16'>
                    <h1 className='text-2xl font-semibold mb-2'>Our Fleet</h1>
                    <p className='hover:bg-slate-300'>From compact cars perfect for city driving to luxury vehicles for special occasions, our diverse fleet is regularly updated and meticulously maintained to ensure safety and comfort. We offer everything from economy cars to SUVs, convertibles, and even electric vehicles, catering to all types of travelers and budgets.</p>

                    <h1 className='text-2xl font-semibold mt-4 mb-2'>Our Mission</h1>
                    <p className='hover:bg-slate-300'><i>Our mission is to make car rental easy, accessible, and stress-free. We strive to offer the best customer service in the industry, with flexible rental options, competitive pricing, and transparent policies. We aim to build long-term relationships with our customers by consistently exceeding their expectations.</i></p>

                    <h1 className='text-2xl font-semibold mt-4 mb-2 hover:bg-slate-400'>Why Choose RentACar?</h1>
                    <p className='hover:bg-slate-300'><b>Extensive Vehicle Selection:</b> Choose from a wide variety of vehicles to suit your specific needs. <br />
                        <b>Affordable Rates:</b> Enjoy competitive pricing with no hidden fees. <br />
                        <b>24/7 Customer Support:</b> We are always here to help, no matter what time of day. <br />
                        <b>Convenient Locations:</b> Find us in major cities, airports, and neighborhoods, making it easy to pick up and drop off your rental. <br />
                        <b>Flexible Rental Periods:</b> Rent by the day, week, or month—whatever fits your schedule. <br />
                    </p>

                </div>

                <div>
                    <ListImg />
                </div>
            </div>
            
            <div className='flex'>
                <div className='ml-12'>
                    <CarBars />
                </div>
                <div className='mt-14 ml-20'>
                    <CarPieChart />
                </div>
            </div>
            <h1 className='mt-2'>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>

            <div>
                <AboutList />
            </div>


        </>
    )
}

export default About