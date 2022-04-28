import { Box } from '@mui/material';
import Forms from './Forms';
import Included from './Included';
import Portfolio from './Portfolio';
import Solutions from './Solutions';
import Upgrades from './Upgrades';
import Welcome from './Welcome';


export default function Home() {
    return (
        <Box sx={{bgcolor: '#E5E5E5'}}>
            <Welcome />
            <Solutions />
            <Included />
            <Upgrades />
            <Portfolio />
            <Forms />
        </Box>
    )
}