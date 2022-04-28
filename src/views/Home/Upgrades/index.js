import { Card, Grid, Typography } from '@mui/material';
import { UpgradesContent } from './UpgradesContent';

export default function Upgrades() {
    return (
        <Grid
            container
            justifyContent="center"
            spacing={2}
        >
            <Grid item xs={10}>
                <Typography color={'secondary'} variant="subtitle1">
                    Serviços opcionais
                </Typography>
                <Typography variant="h3">
                    Seu projeto também pode incluir
                </Typography>
            </Grid>
            {
                UpgradesContent.map((obj) => {
                    return (
                        <Grid item xs={9.87} key={obj.id}>
                            <Card>
                                <Typography>
                                    {obj.title}
                                </Typography>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}