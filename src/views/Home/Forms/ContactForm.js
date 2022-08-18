import {
    Box,
    Button,
    Card,
    Grid,
    TextField,
    Typography,
    Checkbox,
    useTheme
} from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

const validationSchema = yup.object({
    name: yup
        .string('Insira um nome válido')
        .required('Insira seu nome'),
    email: yup
        .string('Insira seu email')
        .email('Insira um email válido')
        .required('Insira seu email'),
    phone: yup
        .number('Insira um número de telefone válido')
        .typeError('Insira um número de telefone válido')
        .min(8, 'Insira um telefone com no mínimo 8 dígitos')
        .required('Informe seu número de telefone'),
    message: yup
        .string()
        .required('Nos conte sobre seu projeto'),
    termsOfService: yup
        .boolean()
        .required('')
        .oneOf([true], ''),
    recaptcha: yup
        .string()
        .required()
});

export const ContactForm = () => {

    const [active, setActive] = useState(true);

    const theme = useTheme();

    const buttonStyle = {
        minHeight: '3em',
        mt: '1em',
        mb: '1.44em',
        width: '90%'
    }

    const formStyle = {
        minHeight: '2.5em',
        mt: '1.5em',
        width: '90%'
    }

    const sendEmail = async (values) => {
        setActive(false)
        await emailjs.send('service_hxnmoom', 'template_vzfseji', {
            from_name: values.name,
            phone_number: values.phone,
            email: values.email,
            company: values.company,
            message: values.message,
        }, 'UhNwUKlxKuW3GEq2b')
            .then(() => {
                toast.success(`Mensagem enviada com sucesso!`)
        }, () => {
            setActive(true);
            toast.error('Ops! Algo de errado aconteceu!')
        });
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            termsOfService: false,
            recaptcha: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            sendEmail(values);
        },
    });

    function onChange(value) {
        if (value.length === 0) {
            console.log('NO BOTS HEEERE!')
        }
        else {
            formik.setFieldValue('recaptcha', `${value}`)
        }
    }

    const labelTheme = { shrink: true };

    return (
        <Grid item
            id='contact'
            xs={11}
            lg={5}
            order={{ xs: 2, lg: 1 }}
            sx={{ pb: '5em' }}>
            <Typography
                variant='h2'
                sx={{
                    mt: '3.125em',
                    color: theme.palette.common.white
                }}
            >
                Nos conte mais sobre seus projetos!
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Card
                    sx={{
                        mt: '1.56em',
                        textAlign: 'center',
                    }}>
                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        color='secondary'
                        label='Seu Nome*'
                        placeholder='meu nome'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        InputLabelProps={labelTheme}
                        sx={formStyle}
                    />
                    <TextField
                        fullWidth
                        id='email'
                        name='email'
                        color='secondary'
                        label='Email*'
                        placeholder='meuemail@email.com'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        InputLabelProps={labelTheme}
                        sx={formStyle}
                    />
                    <TextField
                        fullWidth
                        id='phone'
                        name='phone'
                        color='secondary'
                        label='Telefone*'
                        placeholder='(00) 0 0000-0000'
                        type='tel'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        InputLabelProps={labelTheme}
                        sx={formStyle}
                    />
                    <TextField
                        fullWidth
                        id='company'
                        name='company'
                        color='secondary'
                        label='Empresa'
                        placeholder='Minha empresa'
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        InputLabelProps={labelTheme}
                        sx={formStyle}
                    />
                    <TextField
                        fullWidth
                        id='message'
                        name='message'
                        color='secondary'
                        label='Mensagem*'
                        placeholder='Descreva seu projeto'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                        InputLabelProps={labelTheme}
                        multiline
                        rows={4}
                        sx={formStyle}
                    />
                    <Box sx={{
                        m: '1.5em auto',
                        display: 'flex',
                        alignItems: 'center',
                        width: '90%'
                    }}>
                        <Checkbox
                            id='termsOfService'
                            name='termsOfService'
                            color='primary'
                            value={formik.values.termsOfService}
                            onChange={formik.handleChange}
                        />
                        <Typography>
                            Aceito os termos de uso
                        </Typography>
                    </Box>
                    <Box sx={{
                        m: '1.5em auto',
                        display: 'flex',
                        alignItems: 'center',
                        width: '90%',
                        transform: {
                            xs: 'scale(0.87)',
                            sm: 'scale(1)',
                        },
                        WebkitTransform: {
                            xs: 'scale(0.87)',
                            sm: 'scale(1)',
                        },
                        transformOrigin: '0 0',
                        WebkitTransformOrigin: '0 0'
                    }}>
                        <ReCAPTCHA
                            id='recaptcha'
                            name='recaptcha'
                            sitekey='6LeesDwgAAAAAAL7f42bcAgc-o-BGEixCNEUs2ef'
                            onChange={onChange}
                        />
                    </Box>
                    {
                        active ?
                            <Button
                                color='secondary'
                                variant='contained'
                                type='submit'
                                sx={buttonStyle}>
                                Fale com a gente
                            </Button>
                            :
                            <Button
                                disabled
                                color='secondary'
                                variant='contained'
                                type='submit'
                                sx={buttonStyle}>
                                Enviando...
                            </Button>
                    }
                </Card>
            </form>
        </Grid>
    )
}