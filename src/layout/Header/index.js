import { Box, Button, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Header() {
    return (
        <Box sx={{ bgcolor: '#0B225C' }}>
            <Typography variant="h1">
                Header
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                startIcon={<WhatsAppIcon />}>
                Whatsapp
            </Button>
        </Box>
    )
}