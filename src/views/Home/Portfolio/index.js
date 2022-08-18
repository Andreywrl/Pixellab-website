import { Grid, Typography } from '@mui/material';

export default function Portfolio() {
    return (
        <Grid
            container
            justifyContent='center'
            spacing={2}
            sx={{
                pb: {
                    xs: '4em',
                    sm: '5em'
                }
            }}
        >
            <Grid item xs={9.6}>
                <Typography
                    color={'secondary'}
                    variant='subtitle1'
                    sx={{
                        textAlign: 'center',
                    }}>
                    Portfolio
                </Typography>
                <Typography
                    variant='h2'
                    color='primary'
                    sx={{
                        textAlign: 'center',
                        mt: '0.5em'
                    }}>
                    Conheça alguns de nossos trabalhos
                </Typography>
            </Grid>
            <Grid item xs={10}>
                Aqui, teremos um slider / carousel
            </Grid>
        </Grid>
    )
}