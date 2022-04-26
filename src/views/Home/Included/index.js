import { Card, Grid, Typography } from '@mui/material';
import { IncludedContent } from './IncludedContent';

export default function Included() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid item>
                <Typography>
                    Nosso pacote
                </Typography>
                <Typography>
                    Nossos projetos já incluem
                </Typography>
            </Grid>
            {
                IncludedContent.map((obj) => {
                    return (
                        <Grid item key={obj.key}>
                            <Card>
                                {obj.icon}
                                {obj.title}
                                {obj.description}
                            </Card>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}