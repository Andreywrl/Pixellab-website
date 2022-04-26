import { Button, Grid, Typography } from '@mui/material';

export default function Welcome() {
    return (
        <Grid container>
            <Grid item>
                <Typography>
                    Fórmulas únicas para o sucesso do seu negócio digital
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Você está para que seu negócio alcance o seu melhor resultado para o meio digital?
                </Typography>
            </Grid>
            <Grid item>
                <Button>Fale com a gente</Button>
            </Grid>
        </Grid>
    )
}