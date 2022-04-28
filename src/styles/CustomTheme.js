import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#0B225C',
            light: '#D4DCEE',
            dark: '#07163b'
        },
        secondary: {
            main: '#FF006B',
            light: '#ff4090',
            dark: '#cc0056'
        },
    },
    shape: {
        borderRadius: 8
    },
    typography: {
        fontFamily: 'Poppins, sans-serif'
        ,
        h1: {
            fontWeight: 700,
            fontSize: '1.5em',
            textAlign: 'center'
        },
        h2: {
            fontWeight: 700,
            fontSize: '1.25em'
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.25em'
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.125em'
        },
        subtitle1: {
            lineHeight: 1.25
        },
        body1: {
            fontSize: '0.875em'
        },
        body2: {
            fontSize: '0.75em'
        },
        button: {
            fontWeight: 700,
            lineHeight: 1.5,
            textTransform: "none"
        }
    }
})