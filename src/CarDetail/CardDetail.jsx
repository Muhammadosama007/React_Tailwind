import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { useLocation } from 'react-router-dom'
import { CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const reviews = { href: '#', average: 5, totalCount: 89 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CardDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState(location.state.data.colors[0])
    const [selectedTransmission, setSelectedTransmission] = useState(location.state.data.transmissions[0])

    const goToCart = () => {
        navigate("/Cart", { state: { data: location.state.data } })
    }
    return (
        <div className="bg-stone-200 mx-4 rounded-lg">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li className="text-sm">
                            <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {location.state.data.model}
                            </a>
                        </li>
                    </ol>
                </nav>
                <div className="mx-auto mt-6 w-1/2   lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <CardMedia
                        component="img"
                        alt={location.state.data.model}
                        height="140"
                        className='rounded-lg'
                        image={location.state.data.image}
                    />
                </div>
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{location.state.data.model}</h1>
                    </div>

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <p className="text-3xl tracking-tight text-gray-900">{location.state.data.price}</p>


                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0',
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">

                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                <fieldset aria-label="Choose a color" className="mt-4">
                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                                        {location.state.data.colors.map((color) => (
                                            <Radio
                                                key={color.name}
                                                value={color}
                                                aria-label={color.name}
                                                className={classNames(
                                                    color.selectedClass,
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        color.class,
                                                        'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                    )}
                                                />
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Transmission</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Transmission guide
                                    </a>
                                </div>

                                <fieldset aria-label="Choose a transmission" className="mt-4">
                                    <RadioGroup
                                        value={selectedTransmission}
                                        onChange={setSelectedTransmission}
                                        className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2"
                                    >
                                        {location.state.data.transmissions.map((transmission) => (
                                            <Radio
                                                key={transmission.name}
                                                value={transmission}
                                                disabled={!transmission.inStock}
                                                className={classNames(
                                                    transmission.inStock
                                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                                                )}
                                            >
                                                <span>{transmission.name}</span>
                                                {transmission.inStock ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-indigo-500 ring-offset-2"
                                                    />
                                                ) : (
                                                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md" />
                                                )}
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            <button onClick={goToCart}
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to bag
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{location.state.data.desc}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <div className="mb-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {location.state.data.highlights.map((item, index) => (
                                            <li key={index} className="text-gray-400">
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>


                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{location.state.data.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetail










// import { CardMedia } from '@mui/material';
// import React from 'react'
// import { useLocation } from 'react-router-dom';
// function CardDetail() {
//     const location = useLocation();

//     return (
//         <>
//             <div className='flex mx-3'>
//                 <div>
//                     <CardMedia
//                         component="img"
//                         alt={location.state.data.model}
//                         height="140"
//                         className='rounded-lg'
//                         image={location.state.data.image}
//                     />
//                 </div>
//                 <div className='relative space-y-4 mx-4'>
//                     <h1 className='font-bold text-2xl'>Description</h1>
//                     <h2 className='font-bold text-xl'>{location.state.data.model}</h2>
//                     <p>{location.state.data.desc}</p>
//                     <label htmlFor="qty">Quantity</label>
//                     <input className='mx-2 border border-black rounded' type="number" id='qty' />
//                     <div className='flex justify-center '>
//                         <button className=' p-2 rounded-lg absolute bottom-1 bg-black text-white' >Add To Cart</button>
//                     </div>
//                 </div>


//             </div>


//         </>
//     )
// }

// export default CardDetail