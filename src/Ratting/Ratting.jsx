import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Ratting() {
    return (
        <Stack spacing={1}>
            <Rating name="size-large" defaultValue={4} size="large" />
        </Stack>
    )
}

export default Ratting