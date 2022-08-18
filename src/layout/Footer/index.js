import { Box, Link, Typography, IconButton, Tooltip, Divider, useTheme } from '@mui/material'
import { IconsButtons } from './IconsButtons';
import termosDeUso from '../../assets/PDF/Termos e Condições - PixelLab.pdf';
import polDePriv from '../../assets/PDF/Política Privacidade - PixelLab.pdf';

export default function Footer() {

    const theme = useTheme();

    const contactStyle = {
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
    }

    return (
        <Box sx={{
            bgcolor: 'rgba(11, 34, 92, 0.87)',
            width: '100%',
            m: 'auto',
            p: '3em 0 2em 0',
            borderTopWidth: 0
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '1280px',
                m: 'auto',
                p: {
                    xs: '0em 1.25em',
                    sm: '0em 4em'
                },
            }}>
                <Box>
                    <Typography variant='h3' color={theme.palette.common.white} sx={{ mb: '0.8em', }}>
                        PIXEL LAB
                    </Typography>
                    <Link target='blank' href='tel:+5551994498561' sx={{
                        textDecoration: 'none',
                    }} >
                        <Typography variant='body2' color={theme.palette.common.white} sx={{
                            ...contactStyle,
                            mt: '0.5em'
                        }}>
                            (51) 9 9449-8561
                        </Typography>
                    </Link>
                    <Link target='blank' href='mailto:contato@pixellab.com' sx={{
                        textDecoration: 'none'
                    }} >
                        <Typography variant='body2' color={theme.palette.common.white}
                            sx={{
                                ...contactStyle,
                                mt: '0.5em'
                            }}>
                            contato@pixellab.com
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    {
                        IconsButtons.map((obj) => {
                            return (
                                <Tooltip title={obj.title} key={obj.title} arrow>
                                    <IconButton
                                        target='blank'
                                        href={obj.link}
                                        sx={contactStyle}>
                                        {obj.icon}
                                    </IconButton>
                                </Tooltip>
                            )
                        })
                    }
                </Box>
            </Box>
            <Divider sx={{
                bgcolor: theme.palette.secondary.main,
                m: {
                    xs: '2em 0 2.5em 0',
                    sm: '2em 0 2.5em 0'
                }
            }} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1280px',
                    m: 'auto',
                    p: {
                        xs: '0em 1.25em',
                        sm: '0em 4em'
                    },
                }}
            >
                <Box sx={{
                    display: 'flex',
                }}>
                    <Link
                        href={termosDeUso}
                        target='_blank'
                        sx={{
                            textDecoration: 'none'
                        }}>
                        <Typography
                            sx={{
                                color: theme.palette.common.white,
                                textDecoration: 'none',
                                cursor: 'pointer',
                                fontSize: {
                                    xs: '0.575em',
                                    sm: '0.775em',
                                    lg: '0.875em',
                                }
                            }}>
                            Termos de Uso
                        </Typography>
                    </Link>
                    <Link
                        href={polDePriv}
                        target='_blank'
                        sx={{
                            textDecoration: 'none'
                        }}>
                        <Typography
                            href={'/asdas'}
                            sx={{
                                color: theme.palette.common.white,
                                ml: '1.875em',
                                cursor: 'pointer',
                                fontSize: {
                                    xs: '0.575em',
                                    sm: '0.775em',
                                    lg: '0.875em',
                                }
                            }} >
                            Políticas de Privacidade
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: theme.palette.common.white,
                            fontSize: {
                                xs: '0.575em',
                                sm: '0.775em',
                                lg: '0.875em',
                            }
                        }}>
                        © 2022 Pixel Lab - Todos os direitos reservados
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}