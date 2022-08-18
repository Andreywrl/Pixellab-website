import { Box, Button, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Error404 from '../../assets/Erro404/Error404.svg';

function NotFound() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#E5E5E5'
        }}>
            <Box sx={{
                p: 'auto'
            }}>
                <CardMedia
                    component='img'
                    image={Error404}
                    alt='Welcome Vetor'
                    sx={{
                        width: {
                            xs: '200px',
                            sm: '250px',
                            lg: '300px'
                        },
                        m: '0 auto 3em auto'
                    }}
                />
                <Typography>
                    Oops! Acho que você se perdeu!
                </Typography>
                <Button component={Link} to='/' variant='contained' color='secondary'
                    sx={{
                        width: '100%',
                        m: '1em auto 0 auto'
                    }}>
                    Voltar para página principal
                </Button>
            </Box>
        </Box>
    )
}

export default NotFound;