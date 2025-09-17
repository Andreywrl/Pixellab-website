import { useState } from 'react';
import { Box, Button, CardMedia, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WhiteLogo from '../../assets/Logo/WhiteLogo.png';
import { transitionLeft, transitionRight } from '../../styles/Transitions';
import { linkWhatsApp } from '../../components/links';

export default function Header() {

    const theme = useTheme();

    const transition = {
        WebkitTransition: 'all .7s ease',
        MozTransition: 'transitionall .7s ease',
        transition: 'all .7s ease',
    }

    const [bgColor, setBgColor] = useState(theme.palette.primary.main);

    const changeBackground = () => {
        if (window.scrollY >= 85) {
            setBgColor(theme.palette.primary.glass);
        }
        else {
            setBgColor(theme.palette.primary.main);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Box sx={{
            transition,
            bgcolor: bgColor,
            backdropFilter: 'blur(10px)',
            width: '100%',
            position: 'sticky',
            top: '0px', zIndex: 1500,
        }}>
            <Box sx={{
                display: 'flex',
                height: '4.5em',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '1280px',
                p: {
                    xs: '0em 1.25em',
                    sm: '0em 4em'
                },
                m: 'auto'
            }}>
                <CardMedia
                    component='img'
                    image={WhiteLogo}
                    alt='Spítha'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    sx={{
                        transitionLeft,
                        transition,
                        cursor: 'pointer',
                        width: {
                            xs: '7em',
                            sm: '10em',
                        }
                    }}
                />
                <Button
                    color='secondary'
                    variant='contained'
                    target='blank'
                    href={linkWhatsApp}
                    sx={{
                        transitionRight,
                        height: {
                            xs: '2.75em',
                        },
                        width: {
                            xs: '9.5em',
                        }
                    }}
                    startIcon={<WhatsAppIcon />}>
                    Whatsapp
                </Button>
            </Box>
        </Box>
    )
}