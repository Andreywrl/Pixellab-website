import { Card, Grid, Typography } from '@mui/material';
import { UpgradesContent } from './UpgradesContent';

export default function Upgrades() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid item>
                <Typography>
                    Serviços opcionais
                </Typography>
                <Typography>
                    Seu projeto também pode incluir
                </Typography>
            </Grid>
            {
                UpgradesContent.map((obj) => {
                    return (
                        <Grid item>
                            <Card>
                                {obj.title}
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>

    )
}