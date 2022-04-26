import { Box, Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Header() {
    return (
        <Box>
            <h1>Header</h1>
            <Button startIcon={<WhatsAppIcon />}>Whatsapp</Button>
        </Box>
    )
}