import React from 'react'
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function Home_Icon() {
    return (
        <Stack >
            <HomeIcon fontSize="large" />
        </Stack>
    )
}

export default Home_Icon
