import React from 'react'
import AboutTable from '../Tables/AboutTable'
import ContactList from '../Lists/ContactList'
import ContactSection from './ContactSection'

function ContactUs() {
    return (
        <>
            <div>

                {/* <h1 className='text-center text-2xl font-bold '>Contact Us</h1> */}
                
                <ContactSection/>
            <h1>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>

                <ContactList />
            <h1 className='mt-2'>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>

                <div className='mt-8'>
                    <AboutTable />
                </div>
                
            </div>
        </>
    )
}

export default ContactUs