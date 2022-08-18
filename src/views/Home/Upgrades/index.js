import { Box, Card, Grid, Typography, useTheme } from '@mui/material';
import { UpgradesContent } from './UpgradesContent';

export default function Upgrades() {

    const theme = useTheme();

    return (
        <Grid
            container
            justifyContent='center'
            spacing={1}
            sx={{
                pb: {
                    xs: '2.5em',
                    sm: '5em'
                },
            }}
        >
            <Grid item xs={9.6}>
                <Typography
                    color={'secondary'}
                    variant='subtitle1'
                    sx={{
                        textAlign: 'center',
                    }}>
                    Serviços adicionais
                </Typography>
                <Typography
                    variant='h2'
                    color='primary'
                    sx={{
                        textAlign: 'center',
                        mt: '0.5em',
                        mb: {
                            xs: '0.5em'
                        }
                    }}>
                    Upgrades para seu projeto
                </Typography>
            </Grid>
            {
                UpgradesContent.map((obj) => {
                    return (
                        <Grid item xs={10.5} key={obj.id}>
                            <Card
                                sx={{
                                    height: {
                                        xs: '2.5em',
                                        sm: '4em    '
                                    },
                                }}>
                                <Box sx={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderLeft: '0.37em solid',
                                    borderLeftColor: theme.palette.secondary.main
                                }}>
                                    <Typography
                                        color='primary'
                                        sx={{
                                            textAlign: 'center',
                                            fontSize: {
                                                xs: '1em',
                                                sm: '1.25em'
                                            }
                                        }} >
                                        {obj.title}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}