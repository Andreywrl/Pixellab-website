'use client'
import { Box, CardMedia, Grid, useTheme } from '@mui/material';
import { Divider0, Divider1 } from '../../components/dividers';
import Forms from './Forms';
import Included from './Included';
import Solutions from './Solutions';
import Upgrades from './Upgrades';
import Welcome from './Welcome';
import Sparks from '../../assets/Parallax/Sparks.svg';
import Elipse from '../../assets/Parallax/Elipse.svg';

export default function Home() {

    const theme = useTheme();

    const styles = {
        homeBg: {
            width: '100%',
            bgcolor: 'rgba(212, 220, 238)'
        },
        background: {
            width: '100%',
            bgcolor: theme.palette.primary.bgColor
        },
        rightSparks: {
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
        },
        rightElipse: {
            xIndex: 1,
            width: '300px',
            position: 'absolute',
            right: '-180px',
            mt: {
                xs: '180px',
                sm: '200px',
                lg: '20px'
            },
        },
        leftElipse: {
            xIndex: 1,
            width: '300px',
            mt: {
                xs: '-380px',
                sm: '-420px',
                lg: '-240px'
            },
            position: 'absolute',
            left: '-180px',
        },
        leftSparks: {
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
        },
        centralize: {
            maxWidth: '1280px',
            m: 'auto'
        }
    }

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Grid container>
                <Grid item xs={12} sx={styles.homeBg}>
                    <Box sx={styles.centralize}>
                        <Welcome />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={styles.background}>
                    <Divider0 />
                </Grid>
                <Grid item xs={12} sx={styles.background}>
                    <Box sx={{
                        ...styles.centralize, position: 'relative',
                        zIndex: 10
                    }}>
                        <Solutions />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={styles.background}>
                    <Box sx={{
                        ...styles.centralize, position: 'relative'
                    }}>
                            <CardMedia
                                component="img"
                                image={Sparks}
                                alt="Sparks"
                                sx={styles.rightSparks}
                            />
                            <CardMedia
                                component="img"
                                image={Elipse}
                                alt="Elipse"
                                sx={styles.rightElipse}
                            />
                        <Included />
                            <CardMedia
                                component="img"
                                image={Elipse}
                                alt="Elipse"
                                sx={styles.leftElipse}
                            />
                            <CardMedia
                                component="img"
                                image={Sparks}
                                alt="Sparks"
                                sx={styles.leftSparks}
                            />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={styles.background}>
                    <Box sx={{ ...styles.centralize, position: 'relative' }}>
                        <Upgrades />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={styles.background}>
                    <Divider1 />
                </Grid>
                <Grid item xs={12} sx={{
                    width: '100%',
                    bgcolor: '#2a3e70'
                }}>
                    <Box sx={styles.centralize}>
                        <Forms />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}