import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { SolutionsContent } from './SolutionsContent';

export default function Solutions() {
    return (
        <Grid
            container
            justifyContent="center"
            spacing={3}
        >
            <Grid item xs={10} sx={{ justifyContent: 'center', alignItems: 'center'}}>
                <Typography color={'secondary'} variant="subtitle1">
                    O que fazemos
                </Typography>
                <Typography variant="h2">
                    Qual a melhor solução para o seu negócio hoje?
                </Typography>
            </Grid>
            {
                SolutionsContent.map((obj) => {
                    return (
                        <Grid item key={obj.key} xs={9.6} lg={3.18}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt={`${obj.title}`}
                                />
                                <Typography variant="h3">
                                    {obj.title}
                                </Typography>
                                <Typography variant="body1">
                                    {obj.description}
                                </Typography>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}