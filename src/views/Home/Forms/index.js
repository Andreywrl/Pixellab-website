import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup
        .string('Insira um nome válido')
        .required('Insira seu nome'),
    email: yup
        .string('Insira seu email')
        .email('Insira um email válido')
        .required('Insira seu email'),
    phone: yup
        .number('Insira um número telefone válido')
        .min(8, 'Insira um telefone com no mínimo 8 dígitos')
        .required('Informe seu número de telefone')
});

export default function Forms() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: 'Olá, tudo bem? Gostaria de apresentar um possível projeto!'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const labelTheme = { shrink: true, variant: 'body2' };

    return (
        <Grid
            container
            justifyContent="center"
        >
            <Grid item xs={11} lg={5.5} order={{ xs: 1, lg: 2 }}>
                <Typography variant="h1">
                    Fazemos ideias malucas virarem realidade
                </Typography>
            </Grid>
            <Grid item xs={11} lg={5.5} order={{ xs: 2, lg: 1 }}>
                <Typography variant="h1">
                    Nos conte mais sobre seus projetos!
                </Typography>
                <Card>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Seu Nome*"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            InputLabelProps={labelTheme}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email*"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            InputLabelProps={labelTheme}
                        />
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Telefone*"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            InputLabelProps={labelTheme}
                        />
                        <TextField
                            fullWidth
                            id="company"
                            name="company"
                            label="Empresa*"
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            InputLabelProps={labelTheme}
                        />
                        <TextField
                            fullWidth
                            id="message"
                            name="message"
                            label="Mensagem*"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            InputLabelProps={labelTheme}
                            multiline
                            rows={4}
                        />
                        <Button
                            color="secondary"
                            variant="contained"
                            fullWidth
                            type="submit">
                            Fale com a gente
                        </Button>
                    </form>
                </Card>
            </Grid>
        </Grid>
    )
}