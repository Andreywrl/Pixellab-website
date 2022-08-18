import { Box, CardMedia, Grid } from '@mui/material';
import { Divider0, Divider1 } from '../../components/dividers';
import Forms from './Forms';
import Included from './Included';
import Solutions from './Solutions';
import Upgrades from './Upgrades';
import Welcome from './Welcome';
import Sparks from '../../assets/Parallax/Sparks.svg';
import Elipse from '../../assets/Parallax/Elipse.svg';

export default function Home() {

    const bgColor = '#F2F4FA';

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Grid container>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: 'rgba(212, 220, 238)'
                }}>
                    <Box sx={{ maxWidth: '1280px', m: 'auto' }}>
                        <Welcome />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: bgColor
                }}>
                    <Divider0 />
                </Grid>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: bgColor
                }}>
                    <Box sx={{
                        maxWidth: '1280px', m: 'auto', position: 'relative',
                        zIndex: 10
                    }}>
                        <Solutions />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: bgColor,
                }}>
                    <Box sx={{
                        maxWidth: '1280px', m: 'auto', position: 'relative'
                    }}>
                        <CardMedia
                            component="img"
                            image={Sparks}
                            alt="Sparks"
                            sx={{
                                zIndex: 2,
                                height: '230px',
                                width: '230px',
                                mt: {
                                    xs: '195px',
                                    sm: '150px',
                                    lg: '0px'
                                },
                                position: 'absolute',
                                right: '0px',
                            }}
                        />
                        <CardMedia
                            component="img"
                            image={Elipse}
                            alt="Elipse"
                            sx={{
                                xIndex: 1,
                                width: {
                                    xs: '300px'
                                },
                                position: 'absolute',
                                right: '-180px',
                                mt: {
                                    xs: '180px',
                                    sm: '200px',
                                    lg: '20px'
                                },
                            }}
                        />
                        <Included />
                        <CardMedia
                            component="img"
                            image={Elipse}
                            alt="Elipse"
                            sx={{
                                xIndex: 1,
                                width: {
                                    xs: '300px'
                                },
                                mt: {
                                    xs: '-380px',
                                    sm: '-420px',
                                    lg: '-240px'
                                },
                                position: 'absolute',
                                left: '-180px',
                            }}
                        />
                        <CardMedia
                            component="img"
                            image={Sparks}
                            alt="Sparks"
                            sx={{
                                xIndex: 2,
                                height: '250px',
                                width: '250px',
                                mt: {
                                    xs: '-465px',
                                    sm: '-440px',
                                    lg: '-270px'
                                },
                                position: 'absolute',
                                left: '0px',
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: bgColor
                }}>
                    <Box sx={{ maxWidth: '1280px', m: 'auto', position: 'relative' }}>
                        <Upgrades />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: bgColor
                }}>
                    <Divider1 />
                </Grid>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: '#2a3e70'
                }}>
                    <Box sx={{ maxWidth: '1280px', m: 'auto' }}>
                        <Forms />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}