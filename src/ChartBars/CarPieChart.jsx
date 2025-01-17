import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
];


function CarPieChart() {
    return (
        <>
            <PieChart
                series={[
                    {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                height={200}
            />
            <h1 className='text-red-700 text-2xl font-bold ml-28 mb-10 mt-24'>Car Selling PieChart</h1>
        </>
    )
}

export default CarPieChart