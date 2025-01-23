import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import Form from './form'
import Footer from '../footer'
import { useFormik } from 'formik'

const PaymentSection = () => {
    const formik = useFormik({
        initialValues: {
            address_line: "",
            city: "",
            state: "",
            postal_code: "",
            cardholder_name: "",
            card_number: "",
            expirity: "",
            cvc: "",
        },
        validate: (values) => {
            const errors = {};

            if (!values.address_line) {
                errors.address_line = "Address Line is required";
            }

            if (!values.city) {
                errors.city = "City is required";
            }
            return errors;
        },
        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <Container maxWidth="lg" sx={{ background: "#FCFCFC", borderRadius: '40px' }}>
                <Grid2 container spacing={8} padding={8} alignItems="center">
                    <Grid2 size={{ xs: 12, md: 4 }} textAlign="center">
                        <Box
                            component="img"
                            src='/images/logo.svg'
                            height={80}
                            width={80}
                        />
                        <Typography sx={{ color: "#12372A", fontSize: "24px" }}
                            fontWeight={800}>
                            Payment gateway
                        </Typography>
                        <Typography sx={{ color: "#A3AED0", fontSize: "14px" }}>
                            Enter school location details
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Typography sx={{
                            textAlign: "left",
                            color: "#000000",
                            marginBottom: 3,
                            fontSize: "34px",
                            fontWeight: 700
                        }}>
                            Compelete registration payment
                        </Typography>
                        <Form formik={formik} />
                    </Grid2>
                </Grid2>
                <Footer />
            </Container>
        </>
    )
}

export default PaymentSection