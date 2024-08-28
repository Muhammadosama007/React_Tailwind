import { CardMedia } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'


function Cart() {
    const location = useLocation();
    console.log(location)

    return (
        <>
            <h1 className='text-3xl font-bold text-center mb-8'>My Cart </h1>
            <div className='flex mx-3 p-2 bg-stone-200 rounded-lg'>
                <div className='relative'>
                    <CardMedia
                        component="img"
                        alt={location?.state?.data?.model}
                        height="140"
                        className='rounded-lg'
                        image={location?.state?.data?.image}
                    />
                    <div className=' flex justify-center '>
                        <button className='absolute right-3 bottom-2'> Zoom</button>
                    </div>
                </div>
                <div className='mx-5 space-y-4 relative'>

                    <h1 className='text-2xl font-bold'>{location?.state?.data?.model}</h1>

                    <p>{location?.state?.data?.desc}</p>

                    <label className='font-medium ' htmlFor="qty">Quantity: </label>
                    <input className='mx-2 rounded-lg border border-black' type="number" />
                    <button className='absolute bottom-6 right-14 bg-blue-700 text-white p-3 rounded-lg'>Proceed To Payment </button>
                </div>
            </div>


        </>
    )
}

export default Cart















