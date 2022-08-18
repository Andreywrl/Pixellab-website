import { createTheme } from '@mui/material';

let theme = createTheme({
    typography: { fontFamily: 'Poppins' }
});

theme = createTheme(theme, {
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: '1.5em',
            [theme.breakpoints.up('sm')]: {
                fontSize: '2em',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '2.55em',
            }
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.25em',
            [theme.breakpoints.up('sm')]: {
                fontSize: '1.875em',
            },
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.25em'
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.125em',
            textAlign: 'center'
        },

        subtitle1: {
            lineHeight: 1.25,
            fontSize: '1em',
            [theme.breakpoints.up('sm')]: {
                fontSize: '1.375em',
            },
        },
        body1: {
            fontSize: {
                xs: '0.875em',
                sm: '1.5em'
            },
            textAlign: 'center'
        },

        button: {
            fontWeight: 700,
            lineHeight: 1.5,
            textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: '#0B225C',
            light: '#D4DCEE',
            dark: '#07163b',
            glass: 'rgba(11, 34, 92, 0.25)'
        },
        secondary: {
            main: '#FF006B',
            light: '#ff4090',
            dark: '#cc0056'
        },
        text: {
            primary: '#494949',
            secondary: '#727272'
        },
        bodybackg: {
            main: '#F2F4FA'
        }
    },
    shape: {
        borderRadius: 8
    },
    shadows: Array(25).fill('0px 18px 18px rgba(0, 0, 0, 0.15)')
})

export default theme;