import { TextBox } from '@/components/form'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Grid2, Stack, Typography } from '@mui/material'
import React from 'react'

const Form = ({ formik }) => {
    return (
        <>
            <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                <Typography color='#000' fontSize={24} paddingBottom={3} fontWeight={700}>
                    Personal details
                </Typography>
                <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            Address line
                        </Typography>
                        <TextBox
                            name="address_line"
                            type="text"
                            placeholder="P.o.Box 1223"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.address_line}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.address_line && formik.errors.address_line}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            City
                        </Typography>
                        <TextBox
                            name="city"
                            type="text"
                            placeholder="Arusha"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.city}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.city && formik.errors.city}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            State
                        </Typography>
                        <TextBox
                            name="state"
                            type="text"
                            placeholder="Arusha, Tanzania"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.state}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.state && formik.errors.state}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            Postal code
                        </Typography>
                        <TextBox
                            name="postal_code"
                            type="text"
                            placeholder="9090"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.postal_code}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.postal_code && formik.errors.postal_code}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Typography color='#000' fontSize={24} paddingBottom={3} fontWeight={700}>
                            Payment methods
                        </Typography>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 3, md: 2 }}>
                                <Box component="img" src='/images/visa.svg' height={48} width={70} />
                            </Grid2>
                            <Grid2 size={{ xs: 3, md: 2 }}>
                                <Box component="img" src='/images/stripe.svg' height={48} width={70} />
                            </Grid2>
                            <Grid2 size={{ xs: 3, md: 2 }}>
                                <Box component="img" src='/images/paypal.svg' height={48} width={70} />
                            </Grid2>
                            <Grid2 size={{ xs: 3, md: 2 }}>
                                <Box component="img" src='/images/debit.svg' height={48} width={70} />
                            </Grid2>
                            <Grid2 size={{ xs: 3, md: 2 }}>
                                <Box component="img" src='/images/gpay.svg' height={48} width={70} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Box>
                        <Typography color='#000' fontSize={24} paddingBottom={3} fontWeight={700}>
                            Card details
                        </Typography>
                    </Box>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            Cardholder’s name
                        </Typography>
                        <TextBox
                            name="cardholder_name"
                            type="text"
                            placeholder="Seen on our card"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.cardholder_name}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.cardholder_name && formik.errors.cardholder_name}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            Card number
                        </Typography>
                        <TextBox
                            name="card_number"
                            type="text"
                            placeholder="Seen on our card"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.card_number}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.card_number && formik.errors.card_number}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            Expirity
                        </Typography>
                        <TextBox
                            name="expirity"
                            type="text"
                            placeholder="20/23"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.expirity}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.expirity && formik.errors.expirity}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography color='#2B3674' fontWeight={600} fontSize={14}>
                            CVC
                        </Typography>
                        <TextBox
                            name="cvc"
                            type="text"
                            placeholder="654"
                            size="small"
                            InputProps={{ disableUnderline: true }}
                            onChange={formik.handleChange}
                            value={formik.cvc}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.cvc && formik.errors.cvc}
                            fullWidth
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <LoadingButton
                            variant="contained"
                            type='submit'
                            fullWidth
                            loading={formik.isSubmitting}
                            sx={{
                                background: "#12372A",
                                color: "#ffffff",
                                padding: "10px 8px 10px 8px",
                                "&:hover": {
                                    background: "#12372A",
                                    color: "#ffffff"
                                }
                            }}
                        >
                            Next
                        </LoadingButton>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Form