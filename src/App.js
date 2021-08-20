import TopBar from "./components/TopBar";
import './App.css'
import {createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

function App() {
    const theme = createTheme({
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    'a': {
                        textDecoration: 'none',
                    },
                },
            },
        },
        typography: {
            fontFamily: [
                "'Noto Sans KR'",
                "sans-serif"
            ].join(','),
        },
        shadows: ["none"],
        palette: {
            primary: {
                main: '#F3F6FA',
            },
            secondary: {
                main: '#3C64B1',
            },

        },
    })
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <TopBar/>

            </BrowserRouter>

        </MuiThemeProvider>
    );
}

export default App;
