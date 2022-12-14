import { Box, Button, CardMedia, Typography, useTheme } from '@mui/material';
import { transitionLeft, transitionRight } from '../../../styles/Transitions';
import welcomeVetor from '../../../assets/Welcome/welcomeVetor.svg';

export default function Welcome() {

    const theme = useTheme();

    const CardMediaStyles = {
        maxWidth: {
            xs: '280px',
            sm: '514px',
            md: '650px',
            lg: '460px'
        },
        m: {
            xs: '1.5em auto',
            sm: '2.5em auto',
            lg: '0 0 0 auto'
        },

    }

    return (
        <Box
            id='welcome'
            sx={{
                bgcolor: theme.palette.primary.light,
                gridTemplateColumns: '1fr 1fr',
                display: 'grid',
                gap: '1.25em',
                p: {
                    xs: '1.25em 1.5em',
                    sm: '4em 5em',
                    lg: '5em 6.5em'
                },
                '@media (max-width: 1199px)': {
                    gridTemplateColumns: '1fr'
                }
            }} >
            <Box
                sx={{
                    gridRowStart: 1,
                    gridColumnStart: 1,
                    alignSelf: 'flex-end',
                }}>
                <Typography variant='h1' color='primary' sx={{
                    textAlign: {
                        xs: 'center',
                        lg: 'left'
                    },
                    width: { lg: '16em' },
                    ...transitionLeft
                }}>
                    Fórmulas únicas para o sucesso do seu negócio no meio digital
                </Typography>
            </Box>
            <Box
                sx={{
                    gridRow: '1 / 4',
                    '@media (max-width: 1199px)': {
                        gridRow: 'auto'
                    },
                    ...transitionRight
                }}>
                <CardMedia
                    component='img'
                    image={welcomeVetor}
                    alt='Welcome Vetor'
                    sx={CardMediaStyles}
                />
            </Box>
            <Box>
                <Typography
                    color='primary'
                    variant='body1'
                    sx={{
                        textAlign: 'left',
                        maxWidth: '538px',
                        mb: {
                            xs: '1.5em',
                            sm: '2.5em',
                            lg: '1.5em'
                        },
                        ...transitionLeft
                    }}>
                    Trabalhamos com você e sua equipe planejando, produzindo e implementando as melhores soluções web para o seu negócio
                </Typography>
                <Button
                    color='secondary'
                    variant='contained'
                    type='submit'
                    target='blank'
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                        textTransform: 'none',
                        minHeight: '3em',
                        mb: '2.5em',
                        width: {
                            xs: '100%',
                            lg: '15.6875em'
                        },
                        ...transitionLeft
                    }}>
                    Fale com a gente
                </Button>
            </Box>
        </Box>
    )
}