import { Grid2, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Grid2 container spacing={4} padding={4} alignItems="center">
                <Grid2 size={{ xs: 12, md: 6 }} justifyContent="center">
                    <Typography sx={{ color: "#A3AED0", fontSize: "14px" }}>
                        © 2024. All Rights Reserved. Made by <b>Switcher.faiz!</b>
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} justifyContent="center">
                    <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
                        <Typography color='primary' fontSize={14} fontWeight={600}>
                            Instructions
                        </Typography>
                        <Typography color='primary' fontSize={14} fontWeight={600}>
                            License
                        </Typography>
                        <Typography color='primary' fontSize={14} fontWeight={600}>
                            Terms of Use
                        </Typography>
                        <Typography color='primary' fontSize={14} fontWeight={600}>
                            Privacy
                        </Typography>
                    </Stack>
                </Grid2>
            </Grid2>
        </>
    )
}

export default Footer