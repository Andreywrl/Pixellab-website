import { ThemeProvider } from '@mui/material';
import Router from './routes';
import theme from './styles/CustomTheme';
import ModalProvider from './contexts/modal';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <main>
            <ThemeProvider theme={theme}>
                <ModalProvider>
                    <Router />
                    <Toaster
                        position='top-center'
                        reverseOrder={false}
                        duration={3000}
                    />
                </ModalProvider>
            </ThemeProvider>
        </main>
    )
}

export default App;