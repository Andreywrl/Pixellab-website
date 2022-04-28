import { Button, Grid, Typography } from '@mui/material';

export default function Welcome() {
    return (
        <Grid container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            sx={{bgcolor: '#D4DCEE'}}
        >
            <Grid item xs={10} lg={5.5}>
                <Typography variant="h1">
                    Fórmulas únicas para o sucesso do seu negócio no meio digital
                </Typography>
            </Grid>
            <Grid item xs={10} lg={4.5}>
                Vetor
                {/* <CardMedia /> */}
            </Grid>
            <Grid item xs={10} lg={5.5}>
                <Typography>
                    Você está para que seu negócio alcance o seu melhor resultado para o meio digital?
                </Typography>
            </Grid>
            <Grid item xs={10} lg={5.5} >
                <Button
                    color="secondary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{ textTransform: 'none' }}>
                    Fale com a gente
                </Button>
            </Grid>
        </Grid>
    )
}