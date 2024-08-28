import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Cards({ CardItems }) {
    const navigate = useNavigate();

    const goToDetails = () => {
        navigate("details", { state: { data: CardItems } })
    }
    const goToCart = () => {
        navigate("Cart", { state: { data: CardItems } })
    }
    return (
        <>
            <div className='mt-10 transition duration-300 ease-in-out hover:scale-110'>
                <Card className='ml-12 ' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={CardItems.model}
                        height="140"
                        image={CardItems.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {CardItems.model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {CardItems.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://www.whatsapp.com">
                            <Button size="small">Share</Button>
                        </a>
                        <Button size="small" onClick={goToDetails}>Learn More</Button>
                        <button className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={goToCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to cart </button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default Cards