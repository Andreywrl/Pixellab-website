import { Button, Grid, Typography, useTheme, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { linkWhatsApp } from '../../../components/links';

export const Contacts = () => {

    const theme = useTheme();

    const startIconStyle = {
        height: {
            xs: '20px',
            sm: '34px'
        },
        width: {
            xs: '20px',
            sm: '34px'
        }
    };

    const buttonStyle = {
        mt: {
            xs: '0.4em',
            sm: '1em'
        },
        color: theme.palette.common.white,
        WebkitTransition: 'all .3s ease',
        MozTransition: 'all .3s ease',
        transition: 'all .3s ease',
        '&:hover': {
            color: theme.palette.secondary.light,
            WebkitTransition: 'all .3s ease',
            MozTransition: 'all .3s ease',
            transition: 'all .3s ease',
        }
    };

    return (
        <Grid item
            xs={12}
            lg={5.5}
            order={{ xs: 1, lg: 2 }}
            sx={{
                pt: {
                    xs: '1.5em',
                    sm: '2.5em',
                    lg: '12em'
                },
            }}>
            <Box sx={{
                borderLeft: '0.37em solid',
                borderLeftColor: theme.palette.secondary.main,
                ml: {
                    xs: '1.25em',
                    sm: '4em',
                    lg: '5em'
                },
                pl: '1.6875em'
            }}>
                <Typography
                    variant='h2'
                    sx={{
                        textAlign: 'left',
                        color: theme.palette.common.white
                    }}>
                    Fazemos ideias
                    malucas virarem realidade
                </Typography>
                <Box sx={{
                    maxWidth: '13.1875em',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: {
                        xs: '0.4em',
                        sm: '1em'
                    },
                }}>
                    <Button
                        startIcon={<PhoneIcon sx={startIconStyle} />}
                        variant='text'
                        target='blank'
                        href='tel:+5551994498561'
                        sx={buttonStyle}>
                        <Typography sx={{
                            fontSize: {
                                xs: '1em',
                                sm: '1.25em'
                            }
                        }}>
                            (51) 9 9449-8561
                        </Typography>
                    </Button>
                    <Button
                        startIcon={<WhatsAppIcon sx={startIconStyle} />}
                        variant='text'
                        target='blank'
                        href={linkWhatsApp}
                        sx={buttonStyle}>
                        <Typography sx={{
                            fontSize: {
                                xs: '1em',
                                sm: '1.25em'
                            }
                        }}>
                            Whatsapp
                        </Typography>
                    </Button>
                    <Button
                        startIcon={<EmailIcon sx={startIconStyle} />}
                        variant='text'
                        target='blank'
                        href='mailto:contato@pixellab.com'
                        sx={buttonStyle}>
                        <Typography sx={{
                            fontSize: {
                                xs: '1em',
                                sm: '1.25em'
                            },
                        }}>
                            contato@pixellab.com
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
}