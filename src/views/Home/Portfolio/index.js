import { Grid, Typography } from '@mui/material';

export default function Portfolio() {
    return (
        <Grid
            container
            justifyContent="center"
            spacing={2}
        >
            <Grid item xs={10}>
                <Typography color={'secondary'} variant="subtitle1">
                    Portfolio
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="h3">
                    Conheça alguns de nossos trabalhos
                </Typography>
            </Grid>
            <Grid item xs={10}>
                Aqui, teremos um slider / carousel
            </Grid>
        </Grid>
    )
}