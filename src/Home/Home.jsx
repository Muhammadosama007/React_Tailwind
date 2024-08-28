import React from 'react'
import Button from '@mui/material/Button';
import Card from '../Cards/Card';
import { Data } from './Data/CardData';
import Home_Slider from '../Slider/Home_Slider';
import MoveToTop from '../FloatingActionButtons/MoveToTop';





function Home({ headerInfo }) {
    return (
        <>
            <div className='flex ml-8 mb-10 '>
                <div className='w-2/5'>
                    {headerInfo.name} | {headerInfo.age}
                    <h1 className=' font-bold text-2xl mb-8 '>Osama's RentACar Company</h1>
                    <p >RentACar is a service that provides vehicles for short-term rental, allowing customers to rent cars, vans, or trucks for a specified period, typically ranging from a few hours to several weeks. Ideal for travelers, business needs, or temporary vehicle replacements, RentACar offers a wide selection of vehicles with options for pickup and drop-off at various locations.</p>
                    <p>At RentACar, we believe that your journey should be as enjoyable as your destination. Established in 2024, we have been committed to providing our customers with a seamless, reliable, and affordable car rental experience. Whether you need a car for a business trip, a weekend getaway, or a road trip adventure, we’ve got you covered with our wide range of vehicles.</p>
                </div>
                <div className='ml-32 mt-16'>
                    <Home_Slider />
                </div>

            </div>
            <div className='flex flex-wrap'>
                {Data.map((i) => {
                    return (
                        <Card CardItems={i} />
                    )
                })}
            </div>
            <div>
                <MoveToTop />
            </div>
           
        </>
    )
}

export default Home