import { Box, Card, Grid, Typography } from '@mui/material';
import { IncludedContent } from './IncludedContent';

export default function Included() {
    return (
        <Grid
            container
            justifyContent="center"
            spacing={2}
        >
            <Grid item xs={10}>
                <Typography color={'secondary'} variant="subtitle1">
                    Nosso pacote
                </Typography>
                <Typography variant="h3">
                    Nossos projetos já incluem
                </Typography>
            </Grid>
            {
                IncludedContent.map((obj) => {
                    return (
                        <Grid item key={obj.key} xs={9.6} lg={2.475} >
                            <Card sx={{
                                flexDirection: 'row',
                            }}>
                                <Box>
                                    {obj.icon}
                                </Box>
                                <Typography variant="h4">
                                    {obj.title}
                                </Typography>
                                <Typography variant="body1">
                                    {obj.description}
                                </Typography>
                            </Card>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}