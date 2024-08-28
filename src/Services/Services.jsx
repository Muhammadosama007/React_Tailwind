import React from 'react'
import ServiceAccordion from './ServiceAccordion'
import Services_Slider from '../Slider/Services_Slider'
import ListImg from '../Lists/ListImg'
import S_Divider from './S_Divider'


function Services() {
    return (
        <>
            <h1 className='text-center text-2xl font-bold'>Our Services</h1>
            <div>
                <S_Divider />
            </div>
            <ServiceAccordion />



            <div className='text-2xl font-bold mt-20 ml-12 flex flex-wrap'>
                <div className='w-1/2 rounded-lg  bg-stone-200'>
                    <div className=''>
                        <h1 className='ml-12 mt-12'>Steps To Avail Services</h1>
                        <Services_Slider />
                    </div>
                </div>

                <div>
                    <ListImg />
                </div>
            </div>

        </>
    )
}

export default Services