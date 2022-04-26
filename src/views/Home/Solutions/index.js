import { Card, Grid, Typography } from '@mui/material';
import { SolutionsContent } from './SolutionsContent';

export default function Solutions() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid item>
                <Typography>
                    O que fazemos
                </Typography>
                <Typography>
                    Qual a melhor solução para o seu negócio hoje?
                </Typography>
            </Grid>
            {
                SolutionsContent.map((obj) => {
                    return (
                        <Grid item key={obj.key}>
                            <Card>
                            <Typography>
                                {obj.title}
                            </Typography>
                            <Typography>
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