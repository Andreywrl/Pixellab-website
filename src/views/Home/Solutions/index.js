import { Card, CardMedia, Grid, Typography, useTheme } from '@mui/material';
import { CustomTransition } from '../../../components/Transitions';
import { SolutionsContent } from './SolutionsContent';

export default function Solutions() {

    const theme = useTheme();

    return (
        <Grid
            container
            justifyContent='center'
            spacing={2}
            sx={{
                pb: {
                    xs: '4em',
                    sm: '5em'
                },
            }}
        >
            <Grid item xs={10}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <CustomTransition>
                    <Typography
                        color='secondary'
                        variant='subtitle1'
                        sx={{
                            textAlign: 'center',
                            mt: {
                                xs: '2.5em',
                                sm: '5em',
                            }
                        }}>
                        O que fazemos
                    </Typography>
                </CustomTransition>
                <CustomTransition>
                    <Typography
                        variant='h2'
                        color='primary'
                        sx={{
                            textAlign: 'center',
                            mt: '0.5em',
                            mb: { sm: '0.5em' }
                        }}>
                        Qual a melhor solução para o seu negócio?
                    </Typography>
                </CustomTransition>
            </Grid>
            {
                SolutionsContent.map((obj) => {
                    return (
                        <Grid item key={obj.key} xs={10.5} sm={9.94} lg={3.225}>
                            <CustomTransition>
                                <Card
                                    sx={{
                                        height: '18.25em',
                                    }}>
                                    <CardMedia
                                        component='img'
                                        image={obj.xsImage}
                                        alt={`Image ${obj.title}`}
                                        sx={{
                                            height: '7.75em'
                                        }}
                                    />
                                    <Typography
                                        variant='h3'
                                        color='primary'
                                        sx={{
                                            m: '1em 0.75em 0.0em',
                                            textAlign: {
                                                xs: 'center',
                                                lg: 'left'
                                            }
                                        }}>
                                        {obj.title}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            m: '0.5em 1em 0.5em',
                                            width: '90%',
                                            textAlign: {
                                                xs: 'center',
                                                lg: 'left'
                                            }
                                        }}>
                                        {obj.description}
                                    </Typography>
                                </Card>
                            </CustomTransition>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}