import { ThemeProvider } from '@mui/material';
import Router from './routes';
import theme from './styles/CustomTheme';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router />
            <Toaster
                position='top-center'
                reverseOrder={false}
                duration={3000}
            />
        </ThemeProvider>
    );
};

export default App;