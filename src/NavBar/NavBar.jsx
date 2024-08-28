import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CarRentalIcon from '@mui/icons-material/CarRental';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import HomeIcon from '@mui/icons-material/Home';

export default function Example() {


    return (
        <div >
            <header >
                <nav aria-label="Global" className=" p-6 lg:px-8">

                    <div className='flex justify-around '>

                        <span className='animate-bounce hover:animate-spin flex mt-8'><h1 className=' font-bold text-2xl mb-8 mr-10 '>Osama's RentACar</h1><CarRentalIcon /></span>
                        <Link className='ml-48 hover:text-blue-700' to={"/"}><HomeIcon />| Home</Link>
                        <Link className='hover:text-blue-700' to={"/About"}><InfoIcon />| About</Link>
                        <Link className='hover:text-blue-700' to={"/Contact"}><ContactPageRoundedIcon />| ContactUs</Link>
                        <Link className='hover:text-blue-700' to={"/Services"}><CarRepairIcon />| Services</Link>
                    </div>

                </nav>

            </header>


        </div>
    )
}
