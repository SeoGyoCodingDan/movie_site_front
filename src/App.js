import './App.css'
import {createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import MainRouter from "./routes/MainRouter";

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
            MuiCircularProgress: {
                'width': '500px'

            }
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
            <MainRouter/>
        </MuiThemeProvider>
    );
}

export default App;
