import { Grid } from '@mui/material';
import Forms from './Forms';
import Included from './Included';
import Portfolio from './Portfolio';
import Solutions from './Solutions';
import Upgrades from './Upgrades';
import Welcome from './Welcome';

export default function Home() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Grid item xs={6} >
                <Welcome />
            </Grid>
            <Grid item xs={10}>
                <Solutions />
            </Grid>
            <Grid item xs={10}>
                <Included />
            </Grid>
            <Grid item xs={10}>
                <Upgrades />
            </Grid>
            <Grid item xs={10}>
                <Portfolio />
            </Grid>
            <Grid item xs={10}>
                <Forms />
            </Grid>
        </Grid>
    )
}