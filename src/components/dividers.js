import { Box, CardMedia } from "@mui/material";
import welcomeTriangle from '../assets/End/endWelcome.png';
import formTriangle from '../assets/End/endPortfolio.png';

const styles = {
    divider: {
        width: '100%',
        height: '100%'
    }
}

export const Divider0 = () => {
    return (
        <Box>
            <CardMedia
                component="img"
                image={welcomeTriangle}
                sx={styles.divider}
                alt="Welcome ending"
            />
        </Box>
    )
}

export const Divider1 = () => {
    return (
        <Box>
            <CardMedia
                component="img"
                image={formTriangle}
                sx={styles.divider}
                alt="Welcome ending"
            />
        </Box>
    )
}