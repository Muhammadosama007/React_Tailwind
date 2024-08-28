import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Fade from '@mui/material/Fade'; 

const steps = [
    {
        label: 'Choose Your Vehicle',
        description: `Select from a wide range of vehicles, including economy, luxury, and SUVs, all maintained to the highest standards.`,
    },
    {
        label: 'Customize Your Rental',
        description: `Add GPS, child seats, or extra insurance to make your rental experience as smooth and convenient as possible.`,
    },
    {
        label: 'Pick-up & Drop-off',
        description: `Choose flexible pick-up and drop-off locations. We offer convenient options to meet your travel needs.`,
    },
    {
        label: '24/7 Customer Support',
        description: `Our support team is available around the clock to assist with any questions or issues you may have.`,
    },
    {
        label: 'Flexible Payment Options',
        description: `Pay with credit cards, debit cards, or mobile payments. We make it easy for you to get on the road.`,
    },
];

function Services_Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ margin: 4, maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',

                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
                <Fade in={true} timeout={500}>
                    <Typography>{steps[activeStep].description}</Typography>
                </Fade>
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default Services_Slider;
