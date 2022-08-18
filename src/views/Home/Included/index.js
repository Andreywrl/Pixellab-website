import { Box, Card, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { IncludedContent } from './IncludedContent';

export default function Included() {

    const theme = useTheme();

    return (
        <Grid
            container
            justifyContent='center'
            spacing={2}
            sx={{
                pb: {
                    xs: '2.5em',
                    sm: '5em',
                    position: 'relative',
                    zIndex: 10
                },
            }}
        >
            <Grid item xs={10}>
                <Typography
                    color={'secondary'}
                    variant='subtitle1'
                    sx={{
                        textAlign: 'center',
                    }}>
                    Nosso pacote
                </Typography>
                <Typography
                    variant='h2'
                    color='primary'
                    sx={{
                        textAlign: 'center',
                        mt: '0.5em',
                        mb: { sm: '0.5em' }
                    }}>
                    Todos nossos projetos já incluem
                </Typography>
            </Grid>
            {
                IncludedContent.map((obj) => {
                    return (
                        <Grid item
                            key={obj.key}
                            xs={10.5}
                            sm={4.81}
                            lg={2.625}>
                            <Card sx={{
                                flexDirection: 'column',
                                textAlign: 'center',
                                alignItems: 'center',
                                height: '13em',
                            }}>
                                <Box
                                    sx={{ mt: '1.3em' }}>
                                    {obj.icon}
                                </Box>
                                <Typography
                                    variant='h4'
                                    sx={{
                                        color: theme.palette.text.primary,
                                        m: '0.6em 0.5em 0.5em',
                                        alignItems: 'center'
                                    }}>
                                    {obj.title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        margin: 'auto',
                                        width: '90%',
                                        maxWidth: '90%'
                                    }}>
                                    {obj.description}
                                </Typography>
                            </Card>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}