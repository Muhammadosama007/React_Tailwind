import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function S_Divider() {
  const services = [
    {
      title: 'Economy Rentals',
      price: '$30/day',
      description: 'Affordable and fuel-efficient cars for budget-conscious travelers.',
      options: ['Compact', 'Sedan', 'Hatchback'],
    },
    {
      title: 'Luxury Rentals',
      price: '$150/day',
      description: 'Premium vehicles for those who want to travel in style and comfort.',
      options: ['Convertible', 'SUV', 'Sedan'],
    },
    {
      title: 'SUV Rentals',
      price: '$80/day',
      description: 'Spacious SUVs perfect for family trips or outdoor adventures.',
      options: ['Compact SUV', 'Full-Size SUV', 'Luxury SUV'],
    },
    {
      title: 'Truck Rentals',
      price: '$100/day',
      description: 'Heavy-duty trucks for moving goods or heavy-duty tasks.',
      options: ['Pickup Truck', 'Box Truck', 'Cargo Van'],
    },
    {
      title: 'Van Rentals',
      price: '$90/day',
      description: 'Comfortable and spacious vans for group travel.',
      options: ['Minivan', 'Passenger Van', 'Luxury Van'],
    },
    {
      title: 'Electric Vehicles',
      price: '$70/day',
      description: 'Eco-friendly electric vehicles for a green travel experience.',
      options: ['Compact EV', 'SUV EV', 'Luxury EV'],
    },
    {
      title: 'Sports Car Rentals',
      price: '$200/day',
      description: 'High-performance sports cars for thrill-seekers.',
      options: ['Coupe', 'Convertible', 'Luxury Sports Car'],
    },
    {
      title: '4x4 Rentals',
      price: '$120/day',
      description: 'Rugged 4x4 vehicles for off-road adventures.',
      options: ['Compact 4x4', 'Full-Size 4x4', 'Luxury 4x4'],
    },
    {
      title: '2Door Rentals',
      price: '$170/day',
      description: '2Door vehicles for off-road adventures.',
      options: ['Compact @Door', 'Full-Size 2_Door', 'Luxury 4x4'],
    },
  ];

  return (
 <div className='ml-8'>
    <Grid container spacing={2} sx={{ marginTop: 4 }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className='transition duration-300 ease-in-out hover:scale-110' variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {service.price}
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="body2">
                {service.description}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="body2">
                Available Options
              </Typography>
              <Stack direction="row" spacing={1}>
                {service.options.map((option, idx) => (
                  <Chip key={idx} color={idx === 0 ? 'primary' : 'default'} label={option} size="small" />
                ))}
              </Stack>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  )
}

export default S_Divider;
