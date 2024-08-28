import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ServiceAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='mt-10'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Vehicle Selection
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Choose from a wide range of vehicles
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        RentACar offers a diverse selection of vehicles, from compact cars to luxury SUVs. Find the perfect car to suit your travel needs.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Flexible Rental Periods</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Rent for a day, week, or month
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Whether you need a vehicle for a day, a week, or longer, RentACar offers flexible rental periods to accommodate your plans.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        24/7 Roadside Assistance
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Support whenever you need it
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our 24/7 roadside assistance ensures that help is always available, whether you need a tow, a tire change, or a jump start.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content'
          id='panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Insurance Coverage
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Drive with peace of mind
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        RentACar offers comprehensive insurance options to protect you and your rental vehicle during your trip.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Airport Pickup & Drop-off
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Convenient service at major airports
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Enjoy the convenience of airport pickup and drop-off services at all major locations, ensuring a smooth start and end to your journey.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        GPS Navigation Systems
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Stay on track with our GPS options
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Add a GPS navigation system to your rental for accurate directions and real-time traffic updates, ensuring you reach your destination efficiently.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Child Safety Seats
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Safe travel for your little ones
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        RentACar provides child safety seats to ensure the safety and comfort of your youngest passengers. Just request a seat when booking.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Luxury Car Rentals
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Drive in style with our premium vehicles
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Experience luxury and performance with our selection of high-end vehicles, perfect for special occasions or just treating yourself.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9bh-content"
                    id="panel9bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        One-Way Rentals
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Flexibility for your travel plans
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Need to drop off your rental at a different location? RentACar offers one-way rentals to give you more flexibility on your journey.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel10bh-content"
                    id="panel10bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Corporate Rentals
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Tailored solutions for business needs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        RentACar provides tailored corporate rental services, offering special rates and dedicated support for businesses and frequent travelers.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default ServiceAccordion;
