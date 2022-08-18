import { Box, CardMedia } from "@mui/material";
import welcomeTriangle from '../assets/End/endWelcome.png';
import formTriangle from '../assets/End/endPortfolio.png';

export const Divider0 = () => {
    return (
        <Box>
            <CardMedia
                component="img"
                image={welcomeTriangle}
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
                alt="Welcome ending"
            />
        </Box>
    )
}