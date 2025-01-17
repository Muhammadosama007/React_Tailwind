import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


function CarBars() {
    return (
        <>

            <BarChart
                series={[
                    { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
                    { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
                    { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
                    { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
                    { data: [10, 6, 5, 8, 9], label: 'Series C1' },
                ]}
                width={600}
                height={350}
            />
            <h1 className='text-red-700 text-2xl font-bold ml-44 mb-10'>Car Selling Bar Graph</h1>
        </>

    )
}

export default CarBars