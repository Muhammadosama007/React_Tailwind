import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const itemData = [
    {
        img: 'Tesla_Roadster.webp',
        title: 'Tesla_Roadster',
        author: 'Tesla_Roadster',
    },
    {
        img: 'Porsche_918_Spyder.webp',
        title: 'Porsche_918_Spyder',
        author: 'Porsche_918_Spyder',
    },
    {
        img: 'Pagani_Huayra.webp',
        title: 'Pagani_Huayra',
        author: 'Pagani_Huayra',
    },
    {
        img: 'Mercedes_AMG_One.webp',
        title: 'Mercedes_AMG_One',
        author: 'Mercedes_AMG_One',
    },
    {
        img: 'McLaren.webp',
        title: 'McLaren',
        author: 'McLaren',
    },
    {
        img: 'Lamborghini_Aventador.webp',
        title: 'Lamborghini_Aventador',
        author: 'Lamborghini_Aventador',
    },
    {
        img: 'Koenigsegg_Regera.webp',
        title: 'Koenigsegg_Regera',
        author: 'Koenigsegg_Regera',
    },
    {
        img: 'Ford_GT.webp',
        title: 'Ford_GT',
        author: 'Ford_GT',
    },
    {
        img: 'Ferrari_LaFerrari.webp',
        title: 'Ferrari_LaFerrari',
        author: 'Ferrari_LaFerrari',
    },
    {
        img: 'Bugatti_Chiron.webp',
        title: 'Bugatti_Chiron',
        author: 'Bugatti_Chiron',
    },
    {
        img: 'BMW_i8.webp',
        title: 'BMW_i8',
        author: 'BMW_i8',
    },
    {
        img: 'Aston_Martin_Valkyrie.webp',
        title: 'Aston_Martin',
        author: 'Aston_Martin',
    },
];



function ListImg() {
    return (
        <div className='flex justify-end m-10 transition duration-300 ease-in-out hover:scale-110'>
            <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.author} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    )
}

export default ListImg