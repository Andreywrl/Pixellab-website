import { Box, ThemeProvider } from "@mui/material";
import Router from "./routes";
import { Theme } from "./styles/CustomTheme";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Box>
                <Router />
            </Box>
        </ThemeProvider>
    )
}

export default App;