import React, { useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { CardContent, Typography, TextField, InputAdornment, CardActions, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useFormik } from 'formik'
import * as emailjs from 'emailjs-com'
import EmailRounded from '@mui/icons-material/EmailRounded';
import toast from 'react-hot-toast';
import Face6Rounded from '@mui/icons-material/Face6Rounded'
import SubjectRounded from '@mui/icons-material/SubjectRounded';
import { contactValidationSchema } from '../../validation/contactValidation';
const ContactForm = () => {
    const formRef = useRef()
    const contactInputNames = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: '',

    }    


    const sendEmail = () => {
        emailjs.sendForm('service_atcjab6', 'template_g6dk9pf', formRef.current, 'Ljuv-L-e3SQrRRsYL')
            .then((result) => {
                console.log(result.text);
                formik.resetForm()
                toast.success('پیام با موفقیت ارسال شد')
            }, (error) => {
                console.log(error.text);
            });
    };

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {
            sendEmail()
            console.log(values);
        },
        validationSchema: contactValidationSchema,
    })




    return (
        <form autoComplete='off' onSubmit={formik.handleSubmit} ref={formRef}>
            <CardContent>
                <Grid container spacing={2} >
    
                    <Grid xs={12} md={6}>
                        <TextField
                            fullWidth

                            label='نام و نام خوانوادگی'
                            name='fullname'
                            variant='outlined'
                            helperText={
                                formik.touched.fullname ? formik.errors.fullname : null
                            }
                            error={
                                Boolean(formik.touched.fullname && formik.errors.fullname)
                            }
                            value={
                                formik.values?.fullname
                            }
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end' >
                                        <Face6Rounded />
                                    </InputAdornment>
                                )
                            }}
                        />

                    </Grid>

                    <Grid xs={12} md={6} >
                        <TextField
                            fullWidth
                            label='آدرس ایمیل شما'
                            name='email'
                            variant='outlined'
                            helperText={
                                formik.touched.email ? formik.errors.email : null
                            }
                            error={
                                Boolean(formik.touched.email && formik.errors.email)
                            }
                            value={
                                formik.values?.email
                            }
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end' >
                                        <EmailRounded />
                                    </InputAdornment>
                                )
                            }}
                        />



                    </Grid>

                    <Grid xs={12} >
                        <TextField
                            fullWidth
                            label='عنوان'
                            name='subject'
                            variant='outlined'
                            helperText={
                                formik.touched.subject ? formik.errors.subject : null
                            }
                            error={
                                Boolean(formik.touched.subject && formik.errors.subject)
                            }
                            value={
                                formik.values?.subject
                            }
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end' >
                                        <SubjectRounded />
                                    </InputAdornment>
                                )
                            }}
                        />



                    </Grid>

                    <Grid xs={12} >
                        <TextField
                            fullWidth
                            size='small'
                            label='متن پیام'
                            multiline
                            rows={8}
                            name='message'
                            variant='outlined'
                            helperText={
                                formik.touched.message ? formik.errors.message : null
                            }
                            error={
                                Boolean(formik.touched.message && formik.errors.message)
                            }
                            value={
                                formik.values?.message
                            }
                            onChange={formik.handleChange}

                        />



                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ flexDirection: 'column' }}>
             
                <Button type='submit' color='info' variant='contained' sx={{ mt: 4, width: 8 / 10, backgroundColor: '#E9B384', color: grey[800], ":hover": { backgroundColor: '#E9B384' } }}>
                    ارسال پیام
                </Button>

            </CardActions>
        </form>
    );
};

export default ContactForm;