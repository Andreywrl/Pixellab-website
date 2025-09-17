import {
    Box,
    Button,
    Card,
    Grid,
    TextField,
    Typography,
    useTheme
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup
        .string('Insira um nome válido')
        .required('Insira seu nome'),
    company: yup
        .string('Insira o nome da empresa')
        .required('Insira o nome da empresa'),
});


export const ContactForm = () => {
    const theme = useTheme();

    const buttonStyle = {
        minHeight: '3em',
        mt: '1em',
        mb: '.5em',
        width: '90%'
    };

    const formStyle = {
        minHeight: '2.5em',
        mt: '1.5em',
        width: '90%'
    };

    const whatsappNumber = '5551995306894';

    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Monta a mensagem
            const message = `Olá! Meu nome é ${values.name}, minha empresa é ${values.company} e estou vindo do site. Gostaria de conversar sobre um projeto.`;
            // Codifica para URL
            const encodedMessage = encodeURIComponent(message);
            // Monta o link do WhatsApp
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            // Abre o link em nova aba
            window.open(whatsappLink, '_blank');
        },
    });

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
                        id='company'
                        name='company'
                        color='secondary'
                        label='Empresa*'
                        placeholder='Minha empresa'
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        error={formik.touched.company && Boolean(formik.errors.company)}
                        helperText={formik.touched.company && formik.errors.company}
                        InputLabelProps={labelTheme}
                        sx={formStyle}
                    />
                    <Button
                        color='secondary'
                        variant='contained'
                        type='submit'
                        sx={buttonStyle}>
                        Fale com a gente
                    </Button>
                    <Box width={'100%'} mb={2}>
                        <Typography color={'grey'} textAlign={'left'} variant='caption' >
                            *Você será redirecionado para o WhatsApp.
                        </Typography></Box>
                </Card>
            </form>
        </Grid>
    )
}